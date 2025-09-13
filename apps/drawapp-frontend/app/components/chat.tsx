"use client"
import React,{useState , useEffect} from "react";
import {wsUrl }from '@repo/backendurls/urls'
import { Socket } from "dgram";
import { jwtDecode } from "jwt-decode";


interface TokenPayload {
  id: number;
}

interface Message{
    content: string;
    sender: string;
    type: "send" | "received";
}

function Chat ({token  , roomId} :  {token : string ; roomId : number} ){


        const [messages , setMessages] = useState<Message[]>([])
        const [ws , setWs] = useState<WebSocket | null>(null);
        const [input , setInput] = useState('')
        

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
                    setMessages((prev) => [...prev , data.message])
                  }
            }
                   setWs(websocket) 
        },[])
      
        function handleSendMessage(){
             if(!ws || ws.readyState != WebSocket.OPEN) return ; 
             ws.send(JSON.stringify({type : "chat" ,roomId : roomId, content : input}))
             setInput("")
 
        }  

        console.log(messages)
        return( <div>
    
     <h2> Room : {roomId}  </h2>

        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[60%] p-2 rounded-lg shadow ${
              message.type === "send"
                ? "ml-auto bg-green-200 text-right"
                : "mr-auto bg-white text-left"
            }`}
          >
            <div>
                <strong>{message.sender}</strong>: {message.content}
            </div>
          </div>
        ))}
      
      <input value={input}  onChange={(e) => setInput(e.target.value)} type="text" placeholder="Your Message...."/>
      <button onClick={() => handleSendMessage()}>
        Send Message
      </button>
</div>)
}



export default  Chat;