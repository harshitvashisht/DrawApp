"use client"

import DrawInit from "@/draw"
import { useEffect, useRef } from "react"


export default function Canvas(){

    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    useEffect(() => {
         
        if(canvasRef.current){

       DrawInit(canvasRef.current)
            
        }
                          

    } , [canvasRef])


    return <div >
        <canvas className="" ref={canvasRef} width={1080} height={1000} ></canvas>
    </div>
}