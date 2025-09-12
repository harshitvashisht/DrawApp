import Image from "next/image";
import Button from "./components/button";
import Input from "./components/input";
import AuthPage from "./components/authpage";
import Chat from "./components/chat";
import Rooms from "./components/rooms";

export default function Home() {
  return <div>
    <h1>Hello</h1>
    
    <Chat token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIxODMxMGFkLTc5OGUtNDI5Ni05NWVlLTk2ZjAxN2YwYmE5OSIsImlhdCI6MTc1NzY3ODc0OSwiZXhwIjoxNzU3NjgyMzQ5fQ.xmw2p7ckf-lMFv37vvwMH8RF6dl95yMkxrEJZF36-mk"/>
    <AuthPage type="signup"/>
    <Rooms/>
  </div>
}
