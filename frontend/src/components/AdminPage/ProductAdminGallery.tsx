import {useEffect, useState} from "react";

import ProductAdminColumn from "./ProductAdminColumn";
import ProductAdminForm from "./ProductAdminForm";
import {useAuth} from "../../auth/AuthProvider";

import {CartProductType} from "../../CartMain/CartMainStyles";
import {getAllProducts} from "../../service/apiService";


export default function ProductAdminGallery(){
    const [products, setProducts] = useState([] as Array<CartProductType>)
    const [error, setError] = useState('')
    const {token} = useAuth()


    useEffect(()=>{
        setError('')
        getAllProducts(token)
            .then(data => setProducts(data))
            .catch(e => setError(e.message))
    }, [token])

    if (products.length<1){
        return (<div>
            <ProductAdminForm update={setProducts}/>
        </div>)
    }

    return(
         <div>
             <ProductAdminForm update={setProducts}/>
             {error && <h1>{error}</h1>}
             {/*<div className={'productGallery'}>
                 <ProductAdminColumn key={'My Product'} update={setProducts} state={'Product'} items={products.filter(item => item.category==='')}/>

             </div>*/}
         </div>
    )
}