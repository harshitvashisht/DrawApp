"use client"

import React, { useState, useEffect, useRef } from 'react';
import SignIn from '../signin/page';
import { useRouter } from 'next/navigation';
import AppBar from './appbar';
import FloatingOrb from './floatingord';
import FeatureCard from './featurecard';
import Button from './newbutton';
import AnimatedCursor from './animatedcursor';
import Footer from './footer';
import CTA from './cta';

const DrawAppLanding = () => {

  const heroRef = useRef(null);
    const router = useRouter()


  return (
    <div className="font-sans bg-gray-900 text-white overflow-x-hidden min-h-screen">
      <AppBar />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 pt-16" ref={heroRef}>
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

          {/* Stats */}
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

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to bring your ideas to life, built for teams who demand excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="👥"
              title="Real-time Collaboration"
              description="See everyone's cursor and changes instantly. No refresh needed - just pure collaborative magic that keeps your team in perfect sync."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon="🎨"
              title="Advanced Drawing Tools"
              description="Professional-grade tools that adapt to your creative flow. From quick sketches to detailed technical diagrams."
              gradient="from-cyan-500 to-blue-500"
            />
            <FeatureCard
              icon="∞"
              title="Infinite Canvas"
              description="Never run out of space for your ideas. Zoom, pan, and explore an endless canvas that grows with your imagination."
              gradient="from-green-500 to-teal-500"
            />
            <FeatureCard
              icon="⚡"
              title="Lightning Performance"
              description="Built for speed with cutting-edge technology. No lag, no delays - just smooth drawing that keeps up with your thoughts."
              gradient="from-yellow-500 to-orange-500"
            />
            <FeatureCard
              icon="🔒"
              title="Enterprise Security"
              description="Bank-level security with end-to-end encryption. Your ideas stay yours with advanced privacy controls."
              gradient="from-red-500 to-pink-500"
            />
            <FeatureCard
              icon="📱"
              title="Cross-Platform Sync"
              description="Desktop, tablet, or phone - your drawings sync seamlessly across all devices. Create anywhere, anytime."
              gradient="from-purple-500 to-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              See 𝑫𝒓𝒂𝒘𝑨𝒑𝒑 in Action
            </span>
          </h2>
          <p className="text-xl mb-16 text-gray-300 max-w-3xl mx-auto">
            Watch how teams collaborate seamlessly with our intuitive interface and powerful tools
          </p>
          
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-lg border border-gray-700/50 shadow-2xl">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Enhanced Toolbar */}
              <div className="h-16 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 flex items-center px-6 gap-4">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                
                <div className="h-8 w-px bg-gray-600 mx-2"></div>
                
                <div className="flex gap-2">
                  {[
                    { icon: '✏️', active: true }, 
                    { icon: '📐', active: false }, 
                    { icon: '🔲', active: false }, 
                    { icon: '➡️', active: false }, 
                    { icon: 'T', active: false },
                    { icon: '🎨', active: false }
                  ].map((tool, index) => (
                    <div 
                      key={index} 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-all duration-200 ${
                        tool.active 
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg' 
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                      }`}
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
                
                <div className="ml-auto flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-700 rounded-full px-3 py-1 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Live</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Drawing Area */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-4">
                  <AnimatedCursor color="#a855f7" position={{top: '25%', left: '20%'}} delay={0} name="Sarah" />
                  <AnimatedCursor color="#06b6d4" position={{top: '60%', left: '55%'}} delay={1} name="Mike" />
                  <AnimatedCursor color="#10b981" position={{top: '35%', left: '75%'}} delay={2} name="Alex" />
                  
                  {/* Enhanced mock drawing elements */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-20 border-2 border-purple-400/60 rounded-lg bg-purple-400/10 shadow-lg shadow-purple-500/20"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-cyan-400/60 rounded-full bg-cyan-400/10 shadow-lg shadow-cyan-500/20"></div>
                  <div className="absolute top-1/3 right-1/4 w-20 h-16 border-2 border-green-400/60 bg-green-400/10 shadow-lg shadow-green-500/20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute border-t-2 border-purple-400/40 border-dashed" style={{
                      top: '35%', 
                      left: '25%', 
                      width: '25%', 
                      transform: 'rotate(25deg)',
                      transformOrigin: 'left center'
                    }}></div>
                    <div className="absolute border-t-2 border-cyan-400/40 border-dashed" style={{
                      top: '62%', 
                      left: '62%', 
                      width: '13%', 
                      transform: 'rotate(-30deg)',
                      transformOrigin: 'left center'
                    }}></div>
                  </div>
                </div>
                
                {/* Enhanced collaborative indicators */}
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-gray-600/50">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-800"></div>
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-gray-800"></div>
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    <span className="text-gray-300">3 collaborators</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-gray-600/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Auto-saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button  onClick={()=>router.push('/canvas/90')} size="large" className="group">
              <span>Try Interactive Demo</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-ping"></div>
            </Button>
          </div>
        </div>
      </section>

     <CTA/>
     <Footer/>
    </div>
  );
};

export default DrawAppLanding;