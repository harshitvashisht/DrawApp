"use client"

import { httpUrl } from "@repo/backendurls/urls";
import axios from "axios";
import Input from "./input";
import { useRef, useState } from "react";
import Button from "./button";
import { headers } from "next/headers";

export default  function CreateRoom({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }){

      const roomRef = useRef<HTMLInputElement>(null)
    

      async function handleCreateRoom(){

        const roomname = roomRef.current?.value 
        if(!roomname){
            alert('Enter Room Name')
            setOpen(false)
            return
        }
        await axios.post(`${httpUrl}/room`,{ 
            room: roomname
         },  {
      headers: {
      authorization: localStorage.getItem("token") || ""
    }
  }
);
        alert('Room-Created')
        setOpen(false)
      }


    return <div className="bg-slate-400">
      <Button label="Create Room" onclick={()=>setOpen(true)} />

        {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold text-white mb-4">Create a Room</h2>
            
            <Input referannce={roomRef} Placeholder="Enter room name" />
            
            <div className="flex justify-end gap-3 mt-4">
              <Button label="Cancel" onclick={() => setOpen(false)} />
              <Button label="Create" onclick={handleCreateRoom} />
            </div>
          </div>
        </div>
      )}
    </div>

}