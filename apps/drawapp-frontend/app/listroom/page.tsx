"use client"
import { MessageCircle, Users, Hash, Lock, TrendingUp, Sparkles, Clock } from 'lucide-react';
import Rooms from '../components/rooms';
import { useRouter } from 'next/navigation';
import CreateRoom from '../components/createRoom';
import { useState } from 'react';
import AppBar from '../components/appbar';


export default function ListRoom() {
  const router = useRouter()
  const [open , setOpen] = useState(false)
  const handleCreateRoom = ()=>{
       setOpen(true)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <AppBar type='afterAuth'/>
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-3 animate-pulse">
            Chat Rooms
          </h1>
          <p className="text-indigo-200 text-lg">Join conversations happening right now</p>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Sparkles key={i} className="text-indigo-400 animate-pulse" size={20} style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">        
          <Rooms />
           <div className="break-inside-avoid mb-6">
      <div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-dashed border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-blue-500/20"
        onClick={() => handleCreateRoom()}
      >
        <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
            <svg 
              className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-1">Create New Room</h3>
          </div>
        </div>
      </div>
    </div>
          {open && <CreateRoom open={open} setOpen={setOpen}  />}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}