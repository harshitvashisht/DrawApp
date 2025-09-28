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

   return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      <div className="absolute  left-1/2 -translate-x-1/2  bg-black/50   ">
        <button
          className={`px-3 py-2 rounded-l ${
            mode === "rect" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("rect")}
        >
          🔲
        </button>
        <button
          className={`px-3 py-2  ${
            mode === "circle" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("circle")}
        >
          ⚪
        </button>
        <button
          className={`px-3 py-2  ${
            mode === "line" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("line")}
        >
          ➖
        </button>
        <button
          className={`px-3 py-2  ${
            mode === "text" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("text")}
        >
          T
        </button>
        <button
          className={`px-3 py-2  ${
            mode === "arrow" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("arrow")}
        >
          ➡️
        </button>
        <button
          className={`px-3 py-2 rounded-r ${
            mode === "freehand" ? "bg-blue-600 text-white" : "bg-slate-300"
          }`}
          onClick={() => setMode("freehand")}
        >
          ✏️
        </button>
      </div>


      <Canvas roomId={roomId} mode={mode} socket={socket} />
    </div>
  );
       
}

