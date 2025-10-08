"use client"

import { httpUrl } from "@repo/backendurls/urls"
import axios from "axios"
import { useEffect, useState } from "react"
import Chat from "./chat";
import Button from "./newbutton";
import { useRouter } from "next/navigation";


export default function Rooms ({ onCountChange }: { onCountChange?: (count: number) => void }){
 
    const [rooms , setRooms] = useState<any[]>([]);
    const [token , setToken] = useState<string | null>(null)
    
   const router = useRouter()

    useEffect(() => {
        const t = localStorage.getItem('token')
        setToken(t)
        handleGetRooms()
    },[])
       
    async function handleGetRooms(){

        const response = await axios.get(`${httpUrl}/getrooms`)
        setRooms(response.data.rooms)
        if(onCountChange) onCountChange(response.data.rooms.length)
    }
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
     
  {rooms.map((room) => (
    <div
      key={room.id}
      onClick={() => {
       localStorage.setItem('currentRoom', JSON.stringify(room));
       router.push(`/chat/${room.id}`);
  }}
      className="group relative overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-600 hover:to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/60 hover:-translate-y-1"
      style={{ aspectRatio: '1 / 1' }}>

      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      <div className="absolute inset-0 rounded-xl border-2 border-white/40 scale-100 group-hover:scale-105 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>

      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
          <div className="w-6 h-6 rounded-full bg-white/40"></div>
        </div>

        <span className="text-white font-semibold text-base text-center leading-tight transform group-hover:scale-105 transition-transform duration-300 px-2">
          {room.slug}
        </span>

        <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
    </div>
  ))}
</div>
}