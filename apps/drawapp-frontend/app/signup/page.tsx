import { BrowserRouter } from "react-router-dom";
import AuthPage from "../components/authpage";
import AppBar from "../components/appbar";


export default function SignUp(){

     return <div>
        <AppBar type="beforeAuth"/>
        <AuthPage  type="signup" />
     
     </div>
}