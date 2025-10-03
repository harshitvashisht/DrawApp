"use client"
import React,{useState , useEffect} from "react";
import {wsUrl }from '@repo/backendurls/urls'
import { Socket } from "dgram";
import { jwtDecode } from "jwt-decode";




interface Message{
    content: string;
    sender?: string;
    type: "send" | "received";
}

function Chat ({token  , roomId , roomSlug} :  {token : string | null ; roomId : number ; roomSlug?: string} ){


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
                  if(data.type === "chat" && data.content){
                  setMessages((prev) => [...prev, {type : "received" , content: data.content }]);
                  } 
            }   
                    setWs(websocket)     
        },[roomId])
 
      
        function handleSendMessage(){
             if(!ws || ws.readyState != WebSocket.OPEN) return ; 
             ws.send(JSON.stringify({type : "chat" ,roomId : roomId, content : input}))
             setMessages((prev) => [...prev, {type : "send" , content: input }]);
             setInput("");
    
 
        }  
        return<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
  <div className="w-full max-w-4xl h-[90vh] flex flex-col bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div>
          <h2 className="text-white font-semibold text-lg">{roomSlug}</h2>
          <p className="text-cyan-100 text-xs">3 members online</p>
        </div>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-900/30">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`max-w-[60%] p-4 w-fit rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            message.type === "send"
              ? "ml-auto bg-gradient-to-br from-cyan-500 to-cyan-600 text-white text-right rounded-tr-sm"
              : "mr-auto bg-gray-700 text-white text-left rounded-tl-sm"
          }`}
        >
          <div className="text-sm leading-relaxed break-words">
            {message.content}
          </div>
        </div>
      ))}
    </div>
    <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
      <div className="flex items-end gap-3">
        <button className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all duration-200 flex-shrink-0">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>

        <div className="flex-1 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Your Message...."
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 text-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg hover:bg-gray-600 flex items-center justify-center transition-all duration-200">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <button
          onClick={() => handleSendMessage()}
          className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 flex items-center justify-center transition-all duration-200 shadow-lg shadow-cyan-500/30 flex-shrink-0 transform hover:scale-105"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
}



export default  Chat;