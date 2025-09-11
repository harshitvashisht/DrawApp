import Button from "./button";
import Heading from "./heading";
import Input from "./input";


interface AuthPageProps {
    type : "signin" | "signup"
}

export default function AuthPage({type}: AuthPageProps){

    if(type == "signin"){

       return <div className="flex items-center justify-center min-h-screen bg-gray-900">
           <div className="group p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-md">
           <div>
            <h1 className="text-2xl flex justify-center text-white test-bold">
                <Heading label="SignIn"/>
            </h1> <div className="mt-2">
            <Input label="Email address " Placeholder="someone@gmail.com"/></div>
            <div className="mt-2">
            <Input label="Password " Placeholder="**********" />
            </div>
           </div>
           <div className="mt-4 flex justify-center ">
          <Button label="SignIn"/>
          </div>
          </div>
       </div>
    }
       return <div className="flex items-center justify-center min-h-screen bg-gray-900">
           <div  className="group p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-md">
            <div>
            <h1 className="text-2xl flex justify-center text-white test-bold">
                <Heading label="SignUp"/>
            </h1> <div className="mt-2">
            <Input label="Email address " Placeholder="someone@gmail.com"/></div>
            <div className="mt-2 flex flex-row ">
            <Input label="username" Placeholder="Username"/>
            <Input label="Password " Placeholder="**********" />
            </div>
           </div>
           <div className="mt-4 flex justify-center ">
          <Button label="SignIn"/>
          </div>
          </div>
       </div>
    
}