"use client"
import axios from "axios";
import Button from "./button";
import Heading from "./heading";
import Input from "./input";
import cors from  'cors'
import { useRef } from "react";
import { httpUrl } from "@repo/backendurls/urls";



interface AuthPageProps {
    type : "signin" | "signup"
}

export default function AuthPage({type}: AuthPageProps){

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

      async function handleSignUp(){
           const email = emailRef.current?.value || "";
           const password = passwordRef.current?.value || "";
           const name = nameRef.current?.value || "";
           const username = usernameRef.current?.value || ""

           const response = await axios.post(`${httpUrl}/signup` ,{
                     email,
                     password,
                     name,
                     username
           }
        )
         alert("User Signed up")   
       }
       
       async function handleSignIn(){
                
           const username = usernameRef.current?.value || "";
           const password = passwordRef.current?.value  || "";

           const response = await axios.post(`${httpUrl}/signin`,{
                 username,
                 password
           })
           const jwt = response.data.token 
           localStorage.setItem('token',jwt)

           alert("You Are Signed In !")

       }

    if(type == "signin"){

       return <div className="flex items-center justify-center min-h-screen bg-gray-900">
           <div className="group p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-md">
           <div>
            <h1 className="text-2xl flex justify-center text-white test-bold">
                <Heading label="SignIn"/>
            </h1> <div className="mt-2">
            <Input referannce={usernameRef} label="Username" Placeholder="your username"/></div>
            <div className="mt-2">
            <Input referannce={passwordRef} label="Password " Placeholder="**********" />
            </div>
           </div>
           <div className="mt-4 flex justify-center ">
          <Button onclick={handleSignIn} label="SignIn"/>
          </div>
          </div>
       </div>
    }
       return <div className="flex items-center justify-center min-h-screen bg-gray-900">
           <div  className="group p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-md">
            <div>
            <h1 className="text-2xl flex justify-center text-white test-bold">
                <Heading label="SignUp"/>
            </h1> <div className="">
            <div className="mt-2">
            <Input referannce={emailRef} label="Email address " Placeholder="someone@gmail.com"/></div>
            <div className="mt-2 flex flex-row ">
            <Input referannce={usernameRef} label="Username" Placeholder="Username"/>
            <Input referannce={passwordRef} label="Password " Placeholder="**********" />
            </div>
            <div>
                <Input referannce={nameRef} label="Name" Placeholder="Your name"/>
            </div>
            </div>
           </div>
           <div className="mt-4 flex justify-center ">
          <Button onclick={handleSignUp} label="SignUp"/>
          </div>
          </div>
       </div>
    
}