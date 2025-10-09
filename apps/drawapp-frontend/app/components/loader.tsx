
import React from 'react';

export default function Loader() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background content (blurred) */}
      <div className="absolute inset-0 blur-md opacity-40">
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 min-h-screen">
          <div className="p-8 max-w-6xl mx-auto">
            <div className="h-10 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg w-2/3 mb-8"></div>
            <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-5/6 mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-11/12 mb-10"></div>
            
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl"></div>
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-200 rounded-xl"></div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl"></div>
            </div>
            
            <div className="h-5 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-10/12 mb-4"></div>
          </div>
        </div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
      
      {/* Centered spinner - fixed position */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="relative w-12 h-12">
          {/* Single rotating ring */}
          <div className="animate-spin" style={{ animationDuration: '1.2s' }}>
            <svg className="w-12 h-12" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="url(#grayGrad)" 
                strokeWidth="8"
              />
            </svg>
          </div>
          
          {/* Subtle glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-400/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}