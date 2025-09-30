import {useRouter} from "next/navigation"
import FloatingOrb from "./floatingord";
import Button from "./newbutton";
import { useRef } from "react";

export default function HeroSection (){

    const router = useRouter()
      const heroRef = useRef(null);

    return  <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 pt-16" ref={heroRef}>
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <FloatingOrb index={0} size={300} position={{top: '10%', left: '10%'}} delay={0} color="rgba(147, 51, 234, 0.4)" />
              <FloatingOrb index={1} size={200} position={{top: '60%', right: '10%'}} delay={2} color="rgba(6, 182, 212, 0.4)" />
              <FloatingOrb index={2} size={250} position={{bottom: '20%', left: '20%'}} delay={4} color="rgba(168, 85, 247, 0.3)" />
              <FloatingOrb index={3} size={150} position={{top: '30%', right: '30%'}} delay={1} color="rgba(14, 165, 233, 0.3)" />
            </div>
    
            {/* Hero Content */}
            <div className="text-center z-10 relative max-w-6xl px-6">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-gray-800/60 border border-gray-700/50 rounded-full text-gray-300 text-sm font-medium mb-8 backdrop-blur-sm">
                  ✨ Now with real-time AI assistance
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Create
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Collaborate
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Conquer
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                The ultimate collaborative drawing platform where teams create magic together. 
                Real-time collaboration, infinite canvas, and tools that adapt to your creative flow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button onClick={()=>router.push('/canvas/90')} size="large" className="group">
                  <span>Join Draw Room</span>
                  <span className="ml-2 group-hover:rotate-12 transition-transform">⚡</span>
                </Button>
                <Button onClick={()=>router.push('/signin')} variant="outline" size="large" className="group">
                  <span>Join ChatRoom</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full ml-2 animate-pulse"></div>
                </Button>
              </div>
    
             
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">1M+</div>
                  <div className="text-gray-400 text-sm">Drawings Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </section>
}