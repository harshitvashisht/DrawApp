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
import DemoSection from './demosection';

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
      <DemoSection/>
     <CTA/>
     <Footer/>
    </div>
  );
};

export default DrawAppLanding;