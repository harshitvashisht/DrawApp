import { useEffect, useState } from "react";


export default function AppBar (){
    const [scrolled, setScrolled] = useState(false);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

      useEffect(() => {
    
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;
          setMousePosition({ x, y });
        };
    
    
    
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
   return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🎨</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">𝑫𝒓𝒂𝒘𝑨𝒑𝒑</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
            <div className="relative group">
            </div>
          </div>
        </div>
      </div>
    </nav>
  
}