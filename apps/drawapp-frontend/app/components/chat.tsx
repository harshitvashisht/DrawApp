"use client"
import React,{useState , useEffect} from "react";
import {wsUrl }from '@repo/backendurls/urls'
import { Socket } from "dgram";


interface ChatProps {
    type : string, 
    roomId : Number, 

}
function Chat (){
        const [messages , setMessages] = useState<string[]>([])
        const [ws , setWs] = useState(null)

        useEffect(() =>{
            const websocket = new WebSocket(`${wsUrl}`)

            websocket.onopen = () => {
                console.log('Websocket Connected')

                websocket.send(JSON.stringify({type : "join" , roomId : 4}))
            }
            websocket.onmessage = (event) =>{
                  const message = (JSON.parse(event.data))
                  console.log("Recieved" , message)
                  setMessages((prev) => [...prev , message])
            }
        },[])
        return <div>
    Hello
    {messages}
</div>
}



export default  Chat;