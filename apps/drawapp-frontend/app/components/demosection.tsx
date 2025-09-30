import {useRouter} from "next/navigation"
import AnimatedCursor from "./animatedcursor";
import Button from "./newbutton";

export default function DemoSection(){
    const router = useRouter()
    
    return <section className="py-24 px-6 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 relative overflow-hidden">
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
    
}