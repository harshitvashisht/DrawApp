import Button from "./newbutton";
import {useRouter} from "next/navigation"
export default function CTA(){

    const router = useRouter()
    
    return  <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Team's Creativity?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 50,000 teams already using 𝑫𝒓𝒂𝒘𝑨𝒑𝒑 to bring their boldest ideas to life. 
            Start your creative journey today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button onClick={()=>router.push('/signin')} size="large" className="group">
              <span>Sign In</span>
              <span className="ml-2 group-hover:rotate-12 transition-transform">⚡</span>
            </Button>
            <Button onClick={()=>router.push('/signup')} variant="outline" size="large">
              Sign Up
            </Button>
          </div>
          <p className="text-gray-500 text-sm">
            Free forever plan • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
}