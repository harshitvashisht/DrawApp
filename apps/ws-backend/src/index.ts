
import { WebSocket, WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt, { decode } from 'jsonwebtoken'
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer ({port: 8080})
 interface Client{
     ws : WebSocket,
     rooms : Map<string, any>,
     userId : string
 }
const client = new Map<string, Client>()
let queue : any[] =[]
let senderScoket : null | WebSocket;
let recieverSocket  : null | WebSocket;

wss.on('connection' , (ws , req)=>{
      const token = req.url?.split('token=')[1]

      if(!token){
        ws.close(1008,"token Required")
        return;
      }
      jwt.verify(token , JWT_SECRET , (err , decodedtoken) => {
        console.log(token)
        if(err){
          ws.close(1008 , "Invalid Token")
          return; 
        } 
        //@ts-ignore
        const userId = decodedtoken.id
        client.set(userId , { userId , ws , rooms : new Map<string, any>()})

        ws.send(JSON.stringify({type : 'system' , message : "Welcome to WebsocketServer"}))


        ws.on('message' , (message) => {
          try {
              const parsedMessage = JSON.parse(message.toString());
              console.log('Recieved Message' , message.toString())
             
               if(parsedMessage.type == "join"){
                    const user = [...client.values()].find(c => c.ws === ws)
                    const roomId = parsedMessage.roomId
                    user?.rooms.set(roomId , parsedMessage)
               }

               if(parsedMessage.type == "leave"){
                const user = [...client.values()].find(c => c.ws === ws)
                if(!user){
                  return;
                }
                 const roomId = parsedMessage.roomId;
                  user.rooms.delete(roomId)
               }

              if(parsedMessage.type == "chat"){
                const roomId = parsedMessage.roomId 
                queue.push({
                  content: parsedMessage.content,
                  userId: userId,
                  roomId: roomId
                })

                 setInterval(async ()=>{
                     if(queue.length === 0) return;

                    const nextMessage = queue.shift()

                    if(!nextMessage) return;
                      
                    try {
                   
                          await prismaClient.chat.create({
                             data: {
                              message : parsedMessage.content, 
                              userId ,
                              roomId 
                             }
                          })

                    } catch (error) {
                       console.error('Failed to save message' , error)
                       queue.unshift(nextMessage)
                    }
                 },0);

                  for (const user of client.values()) {
                  if(user.rooms.has(parsedMessage.roomId) && user.ws !== ws && user.ws.readyState === WebSocket.OPEN)
                    user.ws.send(JSON.stringify({
                    type : "chat",
                    roomId, 
                    content : parsedMessage.content
                  }))
                }}
                else if (parsedMessage.type === "createOffer") {
          const { targetUserId, sdp, roomId } = parsedMessage;
          const targetUser = client.get(targetUserId);

          if (targetUser && targetUser.ws.readyState === WebSocket.OPEN) {
            targetUser.ws.send(
              JSON.stringify({
                type: "offer",
                sdp,
                roomId,
                senderId: userId,
              })
            );
          }
        }
        else if (parsedMessage.type === "createAnswer") {
          const { targetUserId, sdp, roomId } = parsedMessage;
          const targetUser = client.get(targetUserId);

          if (targetUser && targetUser.ws.readyState === WebSocket.OPEN) {
            targetUser.ws.send(
              JSON.stringify({
                type: "answer",
                sdp,
                roomId,
                senderId: userId,
              })
            );
          }
        }
        else if (parsedMessage.type === "iceCandidate") {
          const { targetUserId, candidate, roomId } = parsedMessage;
          const targetUser = client.get(targetUserId);

          if (targetUser && targetUser.ws.readyState === WebSocket.OPEN) {
            targetUser.ws.send(
              JSON.stringify({
                type: "iceCandidate",
                candidate,
                roomId,
                senderId: userId,
              })
            );
          }
        }
              }
               catch (error) {
             console.error('Invalid JSON' , message)
          } 
          ws.on('close',() =>{
          console.log('Client Disconnected ! ')
          client.delete(userId)
        } )
        })
          })
           
        
      })


