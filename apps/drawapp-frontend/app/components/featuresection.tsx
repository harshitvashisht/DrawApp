import FeatureCard from "./featurecard";

export default function FeatureSection(){
       return       <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
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
}