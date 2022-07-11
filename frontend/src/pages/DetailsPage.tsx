import {useEffect, useState} from "react";


import {useNavigate, useParams} from "react-router-dom";

import {getProductById} from "../service/apiService";
import NavBar from "../components/NavBar";
import {useAuth} from "../auth/AuthProvider";
import ProductDetail from "../components/ProductDetail";
import Product from "../Product/Product";
import {CartProductType} from "../CartMain/CartMainStyles";
import Announcement from "../components/Announcement";



export default function DetailsPage(){

    const auth = useAuth()
    const nav = useNavigate()
    const [currentProduct, setCurrentProduct] = useState({} as CartProductType)
    const [error , setError] = useState('')

    const id = useParams()

    useEffect(()=>{
        setError('')
        getProductById(id.productId ?? '', auth.token)
            .then((data :   CartProductType) => setCurrentProduct(data))
            .catch(e => setError(e.message))
    },[id.productId, auth.token])

    return(
        <div className={'detailsPage'}>
            <Announcement/>
            <NavBar/>


            {error && <h1>{error}</h1>}
            {currentProduct
                ?
                <ProductDetail product={currentProduct}/>
                :
                <p>loading....</p>

            }
        </div>
    )
}
