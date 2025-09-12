"use client"
import React,{useState , useEffect} from "react";
import {wsUrl }from '@repo/backendurls/urls'
import { Socket } from "dgram";

interface ChatProps{
    token : string
    roomId : number
}


function Chat ({token , roomId} : ChatProps){


        const [messages , setMessages] = useState<string[]>([])
        const [ws , setWs] = useState<WebSocket | null>(null);
        
        useEffect(() =>{

            const websocket = new WebSocket(`${wsUrl}?token=${token}`);

          
            console.log('Websocket Connected')

            websocket.onopen = () => {
                websocket.send(JSON.stringify({type : "join" , roomId}))
            }
            websocket.onmessage = (event) =>{
                  const data = (JSON.parse(event.data))
                  console.log("Recieved" , data)
                  
                  if(data.type == "chat" && data.message){
                    setMessages((prev) => [...prev,(data.message)])
                  }
            }
                   setWs(websocket) 

                   return () => websocket.close();
        },[roomId])
        return( <div>
    
     <h2> Room : {roomId}  </h2>
    
</div>)
}



export default  Chat;