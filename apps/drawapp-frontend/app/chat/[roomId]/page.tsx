"use client";

import Chat from "@/app/components/chat";
import { useParams } from "next/navigation";


export default function ChatPage() {
  const { roomId } = useParams();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return <div>
          <Chat token={token} roomId={Number(roomId)} />
  </div>
  
}