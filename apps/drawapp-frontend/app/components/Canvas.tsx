"use client"

import DrawInit from "@/draw"
import { useRef, useEffect, useState } from "react"

type CanvasProps = {
  roomId: string
  mode: "rect" | "circle" | "line" | "text" | "arrow"
}


function  Canvas ({ roomId, mode }: CanvasProps)  {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const modeRef = useRef<"rect" | "circle" | "line" | "text" | "arrow">("rect")

    useEffect(() => {
         
        if(canvasRef.current){
            DrawInit(canvasRef.current , roomId , modeRef)  
        }
    } , [canvasRef])
       
    useEffect(() => {
    modeRef.current = mode
  }, [mode])



    return <div >
        <canvas className="cursor-crosshair" ref={canvasRef} width={1080} height={1000} ></canvas>
    </div>
}

export default Canvas