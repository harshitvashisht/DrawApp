import Image from "next/image";
import Button from "./components/button";
import Input from "./components/input";
import AuthPage from "./components/authpage";
import Chat from "./components/chat";
import Rooms from "./components/rooms";
import Dashboard from "./dashboard/page";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signin/page";
import SignUp from "./signup/page";
import CollabDrawLanding from "./components/collablanding";


export default function Home() {
  return<div>
    <CollabDrawLanding/>
    </div>

}
