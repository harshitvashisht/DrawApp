import Image from "next/image";
import Button from "./components/button";
import Input from "./components/input";
import AuthPage from "./components/authpage";
import Chat from "./components/chat";
import Rooms from "./components/rooms";

export default function Home() {
  return <div>
    <h1>Hello</h1>
    <Rooms/>
  </div>
}
