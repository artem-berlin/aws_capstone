import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import Footer from "../components/Footer";
import Announcement from "../components/Announcement";


export default function LoginPage(){
    return(


    <div className={'loginPage'}>
            <Announcement/>
            <LoginForm/>
           <RegisterForm/>
            <Footer/>
        </div>
    )
}