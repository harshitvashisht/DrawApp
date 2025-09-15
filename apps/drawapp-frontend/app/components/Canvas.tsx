"use client"

import DrawInit from "@/draw"
import { useRef, useEffect } from "react"




function  Canvas ({roomId} : {roomId : string})  {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
         
        if(canvasRef.current){

            DrawInit(canvasRef.current , roomId)
            
        }
                          

    } , [canvasRef])


    return <div >
        <canvas className="" ref={canvasRef} width={1080} height={1000} ></canvas>
    </div>
}

export default Canvas