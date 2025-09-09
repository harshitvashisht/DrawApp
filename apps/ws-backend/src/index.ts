
import { WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt, { decode } from 'jsonwebtoken'

const wss = new WebSocketServer ({port: 8080})

const client = new Map()

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
        client.set(id , ws)

        ws.send(JSON.stringify({type : 'system' , message : "Welcome to WebsocketServer"}))


        ws.on('message' , (message) => {
          try {
              const parsedMessage = JSON.parse(message.toString());
              console.log('Recieved Message' , message.toString())
             
              if(parsedMessage == "message"){
                const recipients = client.get(parsedMessage.to)
                if(recipients && recipients.readystate === WebSocket.OPEN){
                  recipients.send(JSON.stringify({
                    type : "message",
                    from : parsedMessage.from, 
                    content : parsedMessage.content
                  }));
                }else {
                  ws.send(JSON.stringify({type : 'error' , message: "Recipients Not Found"}))
                }
              }

               
          } catch (error) {
             console.error('Invalid JSON' , message)
          } 
        })
      })



})

