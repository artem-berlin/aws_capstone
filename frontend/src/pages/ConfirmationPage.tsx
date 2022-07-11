import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

import {useAuth} from "../auth/AuthProvider";
import {useEffect} from "react";
import Confirmation from "../components/Confirmation";

export default function ConfirmationPage(){
    const {token} = useAuth();

    useEffect(() => {
        fetch(`/api/main`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => response.json())

    }, []);

    return(
        <div className={'main'}>
            <Announcement/>

            <Confirmation/>

            <Footer/>
        </div>
    )
}