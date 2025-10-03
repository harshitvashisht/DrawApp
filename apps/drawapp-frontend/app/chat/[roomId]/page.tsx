"use client";

import Chat from "@/app/components/chat";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function ChatPage() {
  const { roomId } = useParams();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const [roomSlug, setRoomSlug] = useState("Chat Room");

  useEffect(() => {
    const currentRoom = localStorage.getItem('currentRoom');
    if (currentRoom) {
      const room = JSON.parse(currentRoom);
      setRoomSlug(room.slug);
    }
  }, []);
  return <div>
          <Chat token={token} roomId={Number(roomId)} roomSlug = {roomSlug} />
  </div>
  
}