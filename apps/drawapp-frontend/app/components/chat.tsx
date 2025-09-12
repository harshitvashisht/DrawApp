"use client"
import React,{useState , useEffect} from "react";
import {wsUrl }from '@repo/backendurls/urls'
import { Socket } from "dgram";

interface ChatProps{
    token : string
}


function Chat ({token} : ChatProps){


        const [messages , setMessages] = useState<string[]>([])
        const [ws , setWs] = useState(null)
        
        useEffect(() =>{

            const websocket = new WebSocket(`${wsUrl}?token=${token}`);

          
            console.log('Websocket Connected')

            websocket.onopen = () => {
                websocket.send(JSON.stringify({type : "welcome" , text : "WELCOME"}))
            }
            websocket.onmessage = (event) =>{
                  const data = (JSON.parse(event.data))
                  console.log("Recieved" , data)
                  
            }
        },[])
        return <div>
    Hello
    
</div>
}



export default  Chat;