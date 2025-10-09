"use client"
import React, { useEffect, useState } from "react";
import {MessageSquare,Users, Plus, LogOut,Home,Settings,TrendingUp,Clock, Crown, Search , CircleX} from "lucide-react";
import Rooms from "../components/rooms";
import AppBar from "../components/appbar";
import axios from "axios";
import { httpUrl } from "@repo/backendurls/urls";
import { useRouter } from "next/navigation";
import CreateRoom from "../components/createRoom";

export default function UserDashboard() {
  const [count , setCount] = useState<string | null >(null)
  const [myRoom , setMyRoom] = useState<any[]>([])
  const [myroomCount , setMyroomCount]= useState(0)
  const [username , setUsername] = useState<string | null>(null)
  const [open , setOpen] = useState(false)
  const [getActivity , setGetActivity] = useState<any[]>([])
  const router = useRouter()

  useEffect(()=>{
    const loadusername = localStorage.getItem('username')
    setUsername(loadusername)
    setCount(localStorage.getItem('roomLength'))
    getuserRooms()
    getactivity()
  },[])

 async function getuserRooms() {
     const response = await axios.get(`${httpUrl}/myroom`,{
      headers : {
        Authorization : localStorage.getItem('token')
      }
     })
     setMyroomCount(response.data.rooms.length)
     setMyRoom(response.data.rooms)
 }
 function roomcreation(){
      setOpen(true)
 }

 async function deleteRoom(roomId: any){
      const response = await axios.delete(`${httpUrl}/deleteroom/${roomId}` ,{
        headers:{
          Authorization : localStorage.getItem('token')
        }
      })
      if(response.data.message === "Room deleted"){
        alert('Room Deleted Successfully')
      } else{
        alert('Room Can not be deleted !')
      }
 }

 async function getactivity(){
       const response = await axios.get(`${httpUrl}/getactivity` ,{
        headers : {
          Authorization : localStorage.getItem('token')
        }
       })
       setGetActivity(response.data.response)
 }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <AppBar type="afterAuth"/>
      <main className="max-w-7xl mx-auto px-6 py-8 pt-16">
       
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back , {username} 👋</h2>
          <p className="text-gray-400">
            Here's what's happening with your collaboration spaces
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-purple-100">Total Rooms</h3>
              <MessageSquare size={24} className="text-purple-200" />
            </div>
            <p className="text-3xl font-bold">{count}</p>
            <p className="text-xs text-purple-200 mt-1">All accessible rooms</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-pink-100">Admin Rooms</h3>
              <Crown size={24} className="text-pink-200" />
            </div>
            <p className="text-3xl font-bold">{myroomCount}</p>
            <p className="text-xs text-pink-200 mt-1">Rooms you created</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-cyan-100">Active Now</h3>
              <TrendingUp size={24} className="text-cyan-200" />
            </div>
            <p className="text-3xl font-bold">{count}</p>
            <p className="text-xs text-cyan-200 mt-1">Currently active rooms</p>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">My Rooms</h2>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:flex-initial md:w-64">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button onClick={()=>roomcreation()} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center space-x-2 whitespace-nowrap">
                <Plus size={20} />
                <span>Create Room</span>
              </button>
              {open && <CreateRoom open={open} setOpen={setOpen}  />}
            </div>
          </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {myRoom.map((room) => (
    <div
      key={room.id}
      onClick={() => {
        localStorage.setItem('currentRoom', JSON.stringify(room));
        router.push(`/chat/${room.id}`);
      }}
      className="group relative w-full h-32 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl cursor-pointer overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gray-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gray-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="relative h-full p-4 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-white/5 backdrop-blur-sm rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
             <button onClick={(e) => {
              e.stopPropagation();
              deleteRoom(room.id);
              }} className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-800/70 hover:bg-red-600/80 transition-colors z-50" title="Delete Room" >
               <CircleX className="w-5 h-5 text-white" />
             </button>
          </div>
        <div>
          <h3 className="text-lg font-bold text-gray-100 group-hover:scale-105 transition-transform duration-300">
            {room.slug}
          </h3>
        </div>
      </div>

  
      <div className="absolute inset-0 rounded-xl border border-gray-600/50 group-hover:border-gray-500/70 transition-colors duration-300"></div>
    </div>
  ))}
</div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Clock size={24} />
            <span>Recent Activity</span>
          </h2>
                <ul className="space-y-2">
          {getActivity && getActivity.length > 0 ? (
            getActivity.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <span className="flex-shrink-0 w-2 h-2 mt-1.5 bg-green-500 rounded-full animate-pulse" />
                <div className="flex-1 min-w-0">
                  <span className="text-gray-300">
                    {item.action}{" "}
                    <span className="font-medium text-blue-400">"{item.metadata.roomSlug}"</span>
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="flex items-center justify-center p-8 text-gray-500 bg-gray-800/30 rounded-lg">
              <span className="text-sm">No recent activity</span>
            </li>
          )}
        </ul>  
        </div>
      </main>
    </div>
  );
}

