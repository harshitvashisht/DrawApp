"use client"
import React, { useState } from 'react';
import { MessageCircle, Users, Sparkles, Zap, ArrowRight } from 'lucide-react';
import FloatingOrb from '../components/floatingord';
import { useRouter } from 'next/navigation';

export default function RoomSelection() {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const router = useRouter()

  const handleJoinRoom = (roomType: string) => {
    alert(`Joining ${roomType}...`);
    router.push('/listroom')
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
   
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb index={0} size={300} position={{top: '10%', left: '10%'}} delay={0} color="rgba(147, 51, 234, 0.4)" />
        <FloatingOrb index={1} size={200} position={{top: '60%', right: '10%'}} delay={2} color="rgba(6, 182, 212, 0.4)" />
        <FloatingOrb index={2} size={250} position={{bottom: '20%', left: '20%'}} delay={4} color="rgba(168, 85, 247, 0.3)" />
        <FloatingOrb index={3} size={150} position={{top: '30%', right: '30%'}} delay={1} color="rgba(14, 165, 233, 0.3)" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 py-12">
       
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-white/90 font-medium">Choose Your Space</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-pulse drop-shadow-lg">
            Welcome Aboard
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Step into a world of connection and collaboration
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
          <div
            className="group relative"
            onMouseEnter={() => setHoveredRoom('chat')}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden h-full min-h-[500px] flex flex-col">
             
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
             
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col items-center text-center flex-1 justify-between">
                <div className="relative mb-6">
                  <div className={`w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredRoom === 'chat' 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 rotate-6' 
                      : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                  }`}>
                    <MessageCircle className="w-14 h-14 text-white" />
                  </div>
                  {hoveredRoom === 'chat' && (
                    <Zap className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
                  )}
                </div>

                <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  Chat Room
                </h2>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Dive into vibrant conversations. Share thoughts, make connections, and experience real-time interactions like never before.
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => handleJoinRoom('Chat Room')}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60 group/btn flex items-center justify-center gap-2"
                  >
                    <span>Join Chat Room</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>1,234 online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Room Card */}
          <div
            className="group relative"
            onMouseEnter={() => setHoveredRoom('collab')}
            onMouseLeave={() => setHoveredRoom(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden h-full min-h-[500px] flex flex-col">
           
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
            
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col items-center text-center flex-1 justify-between">
                <div className="relative mb-6">
                  <div className={`w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredRoom === 'collab' 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50 rotate-6' 
                      : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
                  }`}>
                    <Users className="w-14 h-14 text-white" />
                  </div>
                  {hoveredRoom === 'collab' && (
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
                  )}
                </div>

                <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  Collaboration Room
                </h2>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Unite minds and create magic together. Access powerful tools designed for seamless teamwork and innovation.
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => handleJoinRoom('Collaboration Room')}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/60 group/btn flex items-center justify-center gap-2"
                  >
                    <span>Join Collaboration Room</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>567 collaborating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}