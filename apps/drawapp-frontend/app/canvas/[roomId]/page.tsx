"use client"
import RoomCanvas from "@/app/components/RoomCanvas"
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

  const [shapes, setShapes] = useState([])
  const [renderLogs , setRenderLogs] = useState([])
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

useEffect(() => {

       
})

return (
    <div>
      < RoomCanvas roomId={roomId}  />
      </div>
)

   
}