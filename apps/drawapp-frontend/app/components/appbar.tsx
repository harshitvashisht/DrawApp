"use client"
import { LogOut , Settings , User  , Home} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


interface AppBarProps {
     type : "beforeAuth" | "afterAuth" 
}


export default function AppBar ({type} : AppBarProps){
    const [scrolled, setScrolled] = useState(false);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const router = useRouter()

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
      }, [])

      function handleLogOut(){
        localStorage.removeItem('token')
        router.push('/')
      }

    if(type == "beforeAuth"){
   return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🎨</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">𝑫𝒓𝒂𝒘𝑨𝒑𝒑</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
             <Home onClick={()=>router.push('/')} className="text-gray-300 hover:text-white transition-colors duration-200" />
            <a href="/signin" className="text-gray-300 hover:text-white transition-colors duration-200">SignIn</a>
            <a href="/signup" className="text-gray-300 hover:text-white transition-colors duration-200">SignUp</a>
            <div className="relative group">
            </div>
          </div>
        </div>
      </div>
    </nav>}return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🎨</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">𝑫𝒓𝒂𝒘𝑨𝒑𝒑</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <Home onClick={()=>router.push('/')} className="text-gray-300 hover:text-white transition-colors duration-200" />
            <a href="#setting" className="text-gray-300 hover:text-white transition-colors duration-200"><Settings/></a>
            <User onClick={()=>router.push('/dashboard')} className="text-gray-300 hover:text-white transition-colors duration-200"/>
            <LogOut className="text-gray-300 hover:text-white transition-colors duration-200" onClick={handleLogOut}/>
            <div className="relative group">
            </div>
          </div>
        </div>
      </div>
    </nav>
  
}