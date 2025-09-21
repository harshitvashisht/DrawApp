import axios from "axios";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

type Shape = {
    type : "rect";
    x : number;
    y:  number ; 
    width : number, 
    height : number;
} | {
    type : 'circle';
    centerX : number;
    centerY : number;
    radius: number;
} | {
    type : 'line';
    startX: number;
    startY : number;
    endX : number;
    endY : number

}


export default async function DrawInit(canvas : HTMLCanvasElement , roomId:string , modeRef :  React.RefObject<"rect" | "circle" | "line"> ){
  
    const ctx = canvas.getContext("2d")

    let existingShapes : Shape[] = await getShapes(roomId)

           if(!ctx) return ;

           clearCanvas(existingShapes ,canvas,ctx)

            ctx.fillStyle = "rgba(0,0,0)"
            ctx.fillRect(0,0,canvas.height,canvas.width)

            let clicked = false
            let startX = 0 ;
            let startY = 0 ;
            
            canvas.addEventListener('mousedown' , (e) => {
                clicked = true
               startX = e.offsetX
               startY = e.offsetY
            }) 
            canvas.addEventListener('mouseup' ,(e) =>{
                if(!clicked) return;
                clicked = false

                const mode = modeRef.current

                if (mode == 'rect'){

                 const width = e.offsetX - startX
                 const height = e.offsetY - startY

                 existingShapes.push({
                    type : "rect",
                    x : startX,
                    y : startY,
                    height, 
                    width
                 })
                }else if(mode == 'circle'){
                    const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));

                    existingShapes.push({
                        type : 'circle',
                        centerX : startX, 
                        centerY : startY,
                        radius  
                    })
                } else if(mode == 'line'){
                     existingShapes.push({
                        type : 'line',
                        startX,
                        startY,
                        endX : e.offsetX,
                        endY : e.offsetY
                     })
                }
                 clearCanvas(existingShapes, canvas, ctx);
            })

            canvas.addEventListener('mousemove' , (e) => {
                if(clicked)  {

                    const mode = modeRef.current


                    if(mode == 'rect'){
                         const width = e.offsetX - startX
                         const height = e.offsetY - startY  
                         clearCanvas(existingShapes ,canvas , ctx )  
                         ctx.strokeStyle = "rgba(255,255,255)"
                         ctx.strokeRect(startX , startY ,width , height)
                    } 


                    else if(mode == 'circle'){
                     const radius = Math.sqrt(
                      Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2))
                      clearCanvas(existingShapes ,canvas , ctx )  
                      ctx.strokeStyle = "rgba(255,255,255)"  
                      ctx.beginPath();
                      ctx.arc(startX, startY, radius, 0, Math.PI * 2);
                      ctx.stroke();
                    } 
                    
                    else if(mode == 'line'){
                         clearCanvas(existingShapes, canvas, ctx)  
                         ctx.strokeStyle = "rgba(255,255,255)"
                         ctx.beginPath()
                         ctx.moveTo(startX, startY)                                        
                         ctx.lineTo(e.offsetX, e.offsetY)
                         ctx.stroke()
                    }
                }
            } )
}

function clearCanvas(existingShapes: Shape[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "rgba(0,0,0)"
  ctx.fillRect(0, 0, canvas.width, canvas.height) 

  existingShapes.forEach((shape) => {
    ctx.strokeStyle = "rgba(255,255,255)"
    if (shape.type === "rect") {
      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
    } else if (shape.type === "circle") {
      ctx.beginPath()
      ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2)
      ctx.stroke()
    }else if (shape.type === "line") {
    ctx.beginPath();
    ctx.moveTo(shape.startX, shape.startY);
    ctx.lineTo(shape.endX, shape.endY);
    ctx.stroke();
  }
  })
}
async function getShapes(roomId:string){

    const res = await axios.get(`http://localhost:3001/chats/${roomId}`)
    const messages= res.data.messages

    const shapes = messages.map((x:{message : string}) =>{
        const messageData = JSON.parse(x.message)
        return messageData
    })
    return shapes
}
