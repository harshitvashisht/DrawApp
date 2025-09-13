"use client"

import { httpUrl } from "@repo/backendurls/urls"
import axios from "axios"
import { useState } from "react"
import Chat from "./chat";


export default function Rooms (){

    const [rooms , setRooms] = useState<any[]>([]);
    const [selectedRoom , setSelectedRoom] = useState<number | null>(null);
       
    async function handleGetRooms(){

        const response = await axios.get(`${httpUrl}/getrooms`)
        setRooms(response.data.rooms)
    }
    
    return <div>

        <button onClick={handleGetRooms}>Get Rooms</button>
      
          <ul>
            {rooms.map((room)=>(
                <li key={room.id} onClick={() => setSelectedRoom(room.id)} className="text-white cursor-hover bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2" >
                    {room.slug}</li>
            ))}
          </ul>
          {selectedRoom && <Chat token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhNjAwY2Y2LTRjZjEtNDE0Yi05NGViLWUxNjZhYzNkMjQzMSIsImlhdCI6MTc1Nzc1MzU4OSwiZXhwIjoxNzU3NzU3MTg5fQ.0lt36Aj3mGTKZUdZwiOCq9N_AmzLaRJrp4IYhIDEGUw" roomId={selectedRoom}/>}
         
    </div>


}