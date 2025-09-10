
import { WebSocket, WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt, { decode } from 'jsonwebtoken'

const wss = new WebSocketServer ({port: 8080})
 interface Client{
     ws : WebSocket,
     room : Map<string, any>,
     id : string
 }
const client = new Map<string, Client>()

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
        const id = decodedtoken.id
        client.set(id , {id , ws , room : new Map<string, any>()})

        ws.send(JSON.stringify({type : 'system' , message : "Welcome to WebsocketServer"}))


        ws.on('message' , (message) => {
          try {
              const parsedMessage = JSON.parse(message.toString());
              console.log('Recieved Message' , message.toString())
             
               if(parsedMessage.type == "join"){
                    const user = [...client.values()].find(c => c.ws === ws)
                    const roomId = parsedMessage.id
                    user?.room.set(roomId , parsedMessage)
               }

               if(parsedMessage.type == "leave"){
                const user = [...client.values()].find(c => c.ws === ws)
                if(!user){
                  return;
                }
                 const roomId = parsedMessage.id;
                  user.room.delete(roomId)
               }

              if(parsedMessage.type == "chat"){
                const roomId = parsedMessage.id 
                  for (const user of client.values()) {
                  if(user.room.has(roomId) && user.ws !== ws && user.ws.readyState === WebSocket.OPEN)
                    user.ws.send(JSON.stringify({
                    type : "chat",
                    roomId, 
                    content : parsedMessage.content
                    
                  }))
                }};  
              
              } 
               catch (error) {
             console.error('Invalid JSON' , message)
          } 
          ws.on('close',() =>{
          console.log('Client Disconnected ! ')
          client.delete(id)
        } )
        })
          })
           
        
      })


