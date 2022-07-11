import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import {useAuth} from "../auth/AuthProvider";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ShoppingCart} from "../interfaces/interfaces";
import {getShoppingCartById} from "../service/apiService";

export default function CheckoutPage(){
    console.log('checkout page')
    const {token} = useAuth();

    const [shoppingCart, setShoppingCart] = useState({} as ShoppingCart)

    const id = useParams()

    useEffect(() => {
        getShoppingCartById(token, id.shoppingCartId!)
            .then((data : ShoppingCart) => setShoppingCart(data))
    }, [token, id.shoppingCartId]);

    return(
        <div className={'main'}>
            <Announcement/>

            { shoppingCart.id && <Checkout shoppingCart={shoppingCart}/> }

            <Footer/>
        </div>
    )
}