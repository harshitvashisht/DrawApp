"use client"

import DrawInit from "@/draw"
import { useRef, useEffect } from "react"

type CanvasProps = {
  roomId: string
  mode: "rect" | "circle" | "line"
}


function  Canvas ({ roomId, mode }: CanvasProps)  {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
         
        if(canvasRef.current){

            DrawInit(canvasRef.current , roomId , mode)
            
        }
                          

    } , [canvasRef , mode])


    return <div >
        <canvas className="" ref={canvasRef} width={1080} height={1000} ></canvas>
    </div>
}

export default Canvas