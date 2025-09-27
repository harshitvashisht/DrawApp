"use client"

import DrawInit from "@/draw"
import { useRef, useEffect, useState } from "react"
import Canvas from "./Canvas"


type CanvasProps = {
  roomId: string

}

export default function  RoomCanvas ({ roomId  }: CanvasProps){
    const [token , setToken] = useState<string | null >(null)
    const [socket , setSocket] = useState<WebSocket | null>(null)
    const [mode , setMode] = useState<"rect" | "circle" | "line" | "text" | "arrow" | "freehand">('circle') 

    useEffect(() =>{

         const t = localStorage.getItem('token')
         setToken(t)

        const ws = new WebSocket(`ws://localhost:8080?token=${t}`)
         const numRoomId = Number(roomId)
        ws.onopen = () => {
            setSocket(ws)

            if(isNaN(numRoomId)){
                      console.error('roomId is not valid' ,roomId)
                    }else{
                        ws.send(JSON.stringify({
                            type : "join",
                            roomId : numRoomId
                        }))
                    }
        }
    },[roomId])


      if(!socket){
        return <div>
            Connecting to server........
        </div>
    }

   return <div>
    <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded ${
            mode === "rect" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("rect")}
        >
          <svg data-name="Layer 1" height="32" width="32"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 13.5H0v-10h16zm-15-1h14v-8H1z"/></svg>
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mode === "circle" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("circle")}
        >
         <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="40"  height="40"className="text-blue-500 hover:text-red-500"><circle cx="1024" cy="1024" r="768"  /></svg>
        </button>
        <button className={`px-4 py-2 rounded ${
            mode === "line" ? "bg-blue-600 text-white" : "bg-gray-200"
          }` } 
          onClick={() => setMode('line')}>
            <svg data-name="Layer 1" height="32" width="32"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.5 7.5v1H.5v-1z" className="fill-rule:evenodd"/></svg>
        </button>
         <button className={`px-4 py-2 rounded ${
            mode === "text" ? "bg-blue-600 text-white" : "bg-gray-200"
          }` } 
          onClick={() => setMode('text')}>
            Text
        </button>
        <button className={`px-4 py-2 rounded  ${
            mode === "arrow" ? "bg-blue-600 text-white" : "bg-gray-200"
          }` } 
          onClick={() => setMode('arrow')} >
            Arrow
        </button>
        <button className={`px-4 py-2 rounded  ${
            mode === "freehand" ? "bg-blue-600 text-white" : "bg-gray-200"
          }` } 
          onClick={() => setMode('freehand')} >
            Pencil
        </button>
      </div>
           <Canvas roomId={roomId} mode={mode} socket={socket} />
   </div>
       
}

