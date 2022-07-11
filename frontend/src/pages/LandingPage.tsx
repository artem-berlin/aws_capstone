

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import LandingForm from "../components/LandingForm";


export default function MainPage(){

    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>
             <LandingForm/>
            <Footer/>
        </div>
    )
}