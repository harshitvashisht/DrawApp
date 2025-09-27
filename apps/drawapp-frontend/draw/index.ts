import axios from "axios";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { json } from "stream/consumers";


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

} | {
    type : 'text';
    x : number;
    y : number; 
    value : string
} | {
    type : 'arrow'; 
    startX : number;
    startY : number;
    endX : number; 
    endY : number; 
} | {
    type : 'freehand';
    points : { x : number , y : number} [];
}


export default async function DrawInit(canvas : HTMLCanvasElement , roomId:string ,socket : WebSocket , modeRef :  React.RefObject<"rect" | "circle" | "line" | "text" | "arrow" | "freehand"> ){
  
    const ctx = canvas.getContext("2d")

    let existingShapes : Shape[] = await getShapes(roomId)

           if(!ctx) return ;

           socket.onmessage = (message) =>{
            const parsedMessage = JSON.parse(message.data)

            if(parsedMessage.type === "chat") {
                const parsedShape = JSON.parse(parsedMessage.content)
                existingShapes.push(parsedShape)
                clearCanvas(existingShapes ,canvas,ctx)
            }
           }

           clearCanvas(existingShapes ,canvas,ctx)

            ctx.fillStyle = "rgba(0,0,0)"
            ctx.fillRect(0,0,canvas.height,canvas.width)

            let clicked = false
            let startX = 0 ;
            let startY = 0 ;

            let currentFreehand :{ type: "freehand"; points: { x: number, y: number }[] } | null = null
            
            canvas.addEventListener('mousedown' , (e) => {
                clicked = true
               startX = e.offsetX
               startY = e.offsetY

               if (modeRef.current === 'freehand') {
        currentFreehand = { type: 'freehand', points: [{ x: startX, y: startY }] };
        existingShapes.push(currentFreehand); 
    }
            }) 
            canvas.addEventListener('mouseup' ,(e) =>{
                if(!clicked) return;
                clicked = false

                const mode = modeRef.current
                let newShape: Shape | null = null;
                if (mode == 'rect'){

                 const width = e.offsetX - startX
                 const height = e.offsetY - startY

               newShape = {
                    type : "rect",
                    x : startX,
                    y : startY,
                    height, 
                    width
                 }   
                }else if(mode == 'circle'){
                    const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));

                  newShape=({
                        type : 'circle',
                        centerX : startX, 
                        centerY : startY,
                        radius  
                    })
                } else if(mode == 'line'){
                    newShape = ({
                        type : 'line',
                        startX,
                        startY,
                        endX : e.offsetX,
                        endY : e.offsetY
                     })
                } else if(mode == 'freehand' && currentFreehand){
                      newShape = currentFreehand;
                      currentFreehand = null; 
                }
                else if(mode == 'arrow'){
                    newShape = ({
                        type : 'arrow',
                        startX,
                        startY,
                        endX : e.offsetX,
                        endY : e.offsetY
                    })


                }else if(mode == 'text'){
                  
                   createTextInput(e.offsetX , e.offsetY , (inputValue) => {
                       if(inputValue.trim() != ""){
                        newShape = ({
                            type: "text",
                            x: e.offsetX, 
                            y : e.offsetY,
                            value : inputValue
                        })
                        existingShapes.push(newShape)
                        clearCanvas(existingShapes, canvas, ctx);

                          if(newShape && socket && socket.readyState === WebSocket.OPEN  ){
                    existingShapes.push(newShape)
                    const numRoomId = Number(roomId)
                  
                    if(isNaN(numRoomId)){
                      console.error('roomId is not valid' ,roomId)
                    }else{
                      socket.send(JSON.stringify({
                        type:"chat",
                        roomId : numRoomId,
                        content : JSON.stringify(newShape)
                      }))
                    }
                }
                       }
                   })
                }
                if(newShape && socket && socket.readyState === WebSocket.OPEN  ){
                    existingShapes.push(newShape)
                    const numRoomId = Number(roomId)
                  
                    if(isNaN(numRoomId)){
                      console.error('roomId is not valid' ,roomId)
                    }else{
                      socket.send(JSON.stringify({
                        type:"chat",
                        roomId : numRoomId,
                        content : JSON.stringify(newShape)
                      }))
                    }
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
                    } else if(mode == 'freehand' && currentFreehand){
                      currentFreehand.points.push({ x: e.offsetX, y: e.offsetY });

                       clearCanvas(existingShapes, canvas, ctx);
                       ctx.beginPath();
                       ctx.strokeStyle = "white";
                       ctx.moveTo(currentFreehand.points[0].x, currentFreehand.points[0].y);
                   
                       currentFreehand.points.forEach((p: { x: number; y: number; }) => ctx.lineTo(p.x, p.y));
                       ctx.stroke();                   
                         }
                    else if(mode == 'arrow')  {
                        clearCanvas(existingShapes, canvas, ctx);  
                        ctx.strokeStyle = "rgba(255,255,255)";
                    ctx.beginPath();
                        ctx.moveTo(startX, startY);
                        ctx.lineTo(e.offsetX, e.offsetY);
                        ctx.stroke();
                        const headLength = 10;
                        const angle = Math.atan2(e.offsetY - startY, e.offsetX - startX);
                        ctx.beginPath();
                        ctx.moveTo(e.offsetX, e.offsetY);
                        ctx.lineTo(
                            e.offsetX - headLength * Math.cos(angle - Math.PI / 6),
                            e.offsetY - headLength * Math.sin(angle - Math.PI / 6)
                        );
                        ctx.lineTo(
                            e.offsetX - headLength * Math.cos(angle + Math.PI / 6),
                            e.offsetY - headLength * Math.sin(angle + Math.PI / 6)
    );
                        ctx.lineTo(e.offsetX, e.offsetY);
                        ctx.fillStyle = ctx.strokeStyle;
                        ctx.fill();
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
            }
            
            else if (shape.type === "circle") {
              ctx.beginPath()
            ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2)
              ctx.stroke()
            }
            
            else if (shape.type === "line") {
            ctx.beginPath();
            ctx.moveTo(shape.startX, shape.startY);
            ctx.lineTo(shape.endX, shape.endY);
            ctx.stroke();
            } 
            
            else if(shape.type === "text"){
                ctx.fillStyle = 'white';
                ctx.font = '20px Arial';
                ctx.fillText(shape.value , shape.x , shape.y)
            } 
            
            else if (shape.type === "freehand") {
             if (shape.points.length > 1) {
               ctx.beginPath();
               ctx.strokeStyle = "white";
               ctx.moveTo(shape.points[0].x, shape.points[0].y);

               shape.points.forEach((p) => ctx.lineTo(p.x, p.y));
               ctx.stroke();
            }
        }      
            else if(shape.type === 'arrow'){
                   const { startX, startY, endX, endY } = shape;
                   const headLength = 10; 
                   const angle = Math.atan2(endY - startY, endX - startX);

                   ctx.beginPath();
                   ctx.moveTo(startX, startY);
                   ctx.lineTo(endX, endY);
                   ctx.stroke();
               

                   ctx.beginPath();
                   ctx.moveTo(endX, endY);
                   ctx.lineTo(
                       endX - headLength * Math.cos(angle - Math.PI / 6),
                       endY - headLength * Math.sin(angle - Math.PI / 6)
                   );
                   ctx.lineTo(
                       endX - headLength * Math.cos(angle + Math.PI / 6),
                       endY - headLength * Math.sin(angle + Math.PI / 6)
                   );
                   ctx.lineTo(endX, endY);
                   ctx.fillStyle = ctx.strokeStyle;
                   ctx.fill();               
                             
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

function createTextInput(
  x: number,
  y: number,
  onDone: (value: string) => void
) {
  const textarea = document.createElement("textarea");

  textarea.style.position = "absolute";
  textarea.style.left = x + "px";
  textarea.style.top = y + "px";
  textarea.style.font = "20px Arial";
  textarea.style.border = "none";
  textarea.style.outline = "none";
  textarea.style.background = "transparent";
  textarea.style.color = "white";      
  textarea.style.zIndex = "1000";
  textarea.style.caretColor = "white";
  textarea.style.resize = "none";      
  textarea.rows = 1;
  textarea.style.lineHeight = "24px";

  document.body.appendChild(textarea);
  textarea.focus();

  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    onDone(textarea.value);
    document.body.removeChild(textarea);
  }

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      finish();
    }
  });

  textarea.addEventListener("blur", () =>{
    if(!finished) finish ()
  });
}
