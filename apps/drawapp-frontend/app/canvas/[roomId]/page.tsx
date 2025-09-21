"use client"
import Canvas from "@/app/components/Canvas"
import DrawInit from "@/draw"
import axios from "axios"
import { useEffect, useState } from "react"



export default function CanvasPage({params}:{
    params : {
        roomId : string
    } 
 },
){
const { roomId } = params
  const [mode, setMode] = useState<"rect" | "circle" | "line">('circle') 
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    async function fetchShapes() {
      const res = await axios.get(`http://localhost:3001/chats/${roomId}`)
      const msgs = res.data.messages
      const shapesData = msgs.map((x: { message: string }) => JSON.parse(x.message))
      setShapes(shapesData)
    }
    fetchShapes()
  }, [roomId])

console.log(roomId)
return (
    <div>
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
      </div>
      <Canvas roomId={roomId} mode={mode} />
      </div>
)

   
}