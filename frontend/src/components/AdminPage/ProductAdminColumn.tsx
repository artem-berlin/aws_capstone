

import {Dispatch, SetStateAction} from "react";

import {CartProductType} from "../../CartMain/CartMainStyles";

import ProductAdminCart from "./ProductAdminCart";


interface ProductColumnProps{
    items : Array<CartProductType>
    state : string
    update : Dispatch<SetStateAction<CartProductType[]>>
}

export default function ProductAdminColumn(props : ProductColumnProps){
    /*return(
        <div className={'productAdminColumn'}>
            <h1 className={'col_text'}>{props.state}</h1>
            {props.items.map(product => < ProductAdminCart update={props.update} key={product.id} infos={product}/>)}
        </div>
    )*/
}