import DrawInit from "@/draw"
import { Socket } from "dgram"
import { useRef, useEffect, useState } from "react"


type CanvasProps = {
  roomId: string
  mode : "rect" | "circle" | "line" | "text" | "arrow" | "freehand"
  socket : WebSocket
}


export default function Canvas({ roomId, mode  ,socket }: CanvasProps){

        const canvasRef = useRef<HTMLCanvasElement>(null)
        const modeRef = useRef<"rect" | "circle" | "line" | "text" | "arrow" | "freehand">("rect")
        
        
        useEffect(() => {
             
            if(canvasRef.current && socket){
                DrawInit(canvasRef.current , roomId , socket, modeRef )  
            }
        } , [socket , roomId])

            useEffect(() => {

              modeRef.current = mode
              
           }, [mode])
 

        return <div>
             <canvas className="cursor-crosshair" ref={canvasRef} width={1080} height={1000} ></canvas>
    </div>
     
}