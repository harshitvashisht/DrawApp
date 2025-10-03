"use client"
import { MessageCircle, Users, Hash, Lock, TrendingUp, Sparkles, Clock } from 'lucide-react';
import Rooms from '../components/rooms';


export default function ListRoom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
  
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