
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import CartMain from "../CartMain/CartMain";



export default function MainPage(){





    return(
        <div className={'main'}>
            <Announcement/>
            <NavBar/>
            <CartMain/>
                <Footer/>
        </div>
    )
}

