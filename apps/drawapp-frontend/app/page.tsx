import Image from "next/image";
import Button from "./components/button";
import Input from "./components/input";
import AuthPage from "./components/authpage";

export default function Home() {
  return <div>
    <h1>Hello</h1>
    <Button  label="SignIn"/>
    <Input label="email" Placeholder="Enter You Email " />
    <AuthPage type="signup"/>
  </div>
}
