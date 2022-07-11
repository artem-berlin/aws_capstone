import NavBar from "../components/NavBar";
/*import RegisterForm from "../components/RegisterForm";*/
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
/*import LoginForm from "../components/RegisterForm";*/

export default function LoginPage(){
    return(
        <div className={'loginPage'}>
            <Announcement/>
            {/* <NavBar/>*/}
           {/*<RegisterForm/>*/}


            <Footer/>
        </div>
    )
}