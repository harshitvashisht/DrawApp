"use client"

import { httpUrl } from "@repo/backendurls/urls"
import axios from "axios"
import { useEffect, useState } from "react"
import Chat from "./chat";
import Button from "./newbutton";
 


export default function Rooms (){

    const [rooms , setRooms] = useState<any[]>([]);
    const [selectedRoom , setSelectedRoom] = useState<number | null>(null);
    const [token , setToken] = useState<string | null>(null)

    useEffect(() => {
        const t = localStorage.getItem('token')
        setToken(t)
        handleGetRooms()
    },[])
       
    async function handleGetRooms(){
        console.log("Get Rooms button clicked");

        const response = await axios.get(`${httpUrl}/getrooms`)
        setRooms(response.data.rooms)
    }
    
    return <div>

      
          <ul>
            {rooms.map((room)=>(
                <li key={room.id} onClick={() => setSelectedRoom(room.id)} className="text-white cursor-hover bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2" >
                    {room.slug}</li>
            ))}
          </ul>
          {selectedRoom && <Chat token= {token} roomId={selectedRoom}/>}
         
    </div>


}