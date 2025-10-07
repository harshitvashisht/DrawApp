import AuthPage from "../components/authpage";
import axios from "axios";
import { BrowserRouter, Router } from "react-router-dom";
import AppBar from "../components/appbar";
export default function SignIn(){

    return <div>
        <AppBar type="beforeAuth"/>
        <AuthPage type="signin"/>
       
    </div>
}