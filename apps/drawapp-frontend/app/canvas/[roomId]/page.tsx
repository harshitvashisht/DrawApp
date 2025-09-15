
import Canvas from "@/app/components/Canvas"
import DrawInit from "@/draw"



export default async function CanvasPage({params}:{
    params : {
        roomId : string
    }
}){
const roomId = (await params).roomId

console.log(roomId)
return <Canvas roomId={roomId}/>
   
}