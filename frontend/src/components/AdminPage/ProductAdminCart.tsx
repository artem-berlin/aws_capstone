

import {Dispatch, FormEvent, SetStateAction, useState} from "react";

import {useNavigate} from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

import {CartProductType} from "../../CartMain/CartMainStyles";


import {deleteProduct, getAllProducts, updateProduct} from "../../service/apiService";
interface ProductCardProps{
    infos : CartProductType
    update : Dispatch<SetStateAction<CartProductType[]>>
}

export default function ProductAdminCart({infos, update} : ProductCardProps){

  /*  const [task , setTask] = useState(infos.task)*/
    const [desc, setDesc] = useState(infos.description)
    const [category, setCategory] = useState(infos.category)
    const [editor, setEditor] = useState(false)
    const nav = useNavigate()
    const {token} = useAuth()

    const statusRevert = () => {
        if (infos.category ==='MyProduct'){
            deleteProduct(infos.title, token).then(()=>
                getAllProducts(token)
                .then(data => update(data)))

        } else {
            infos.category='MyProduct'
            updateProduct(infos.title, infos, token).then(()=>
                getAllProducts(token)
                    .then(data => update(data)))
        }
    }

    const toDetails = () => {
        nav(`/${infos.id}`)
    }


/*
    const changeProduct = (ev : FormEvent<HTMLFormElement>) =>{           //problem id type
        ev.preventDefault()
        updateProduct(infos., {
           id : infos.id,



            description : desc,

        }, token
        )
            .then(()=>
                getAllProducts(token)
                    .then(data => update(data)))
            .catch(e => console.log('out of service...'))
        setEditor(false)
    */

    /*return(<div onClick={() => toDetails()}>
        { editor
            ?
            <form onSubmit={ev =>changeProduct(ev)} className={'productCard'}>
             {/!*   <{input type={'text'} className={'product_title'} value={title} onChange={ev => setTitle(ev.target.value)}/>*!/}
                <input type={'text'} className={'product_description'} value={desc} onChange={ev => setDesc(ev.target.value)}/>
                <div className={'card_btn'}>
                    <button onClick={() => statusRevert()} disabled>{infos.category === 'MyProduct' ? '<Delete' : '<Return'}</button>
                    <button>    <p>Post Product</p></button>
                    {/!*<button onClick={() => nextStatus()} disabled>{infos.status === 'MyProduct' ? 'Delete>' : 'Retur>'}</button>*!/}
                </div>
            </form>
            :
            <div className={'productCard'}>
                <h2 data-testid="the-description" className={'product_description'}>{infos.description}</h2>
                <p data-testid="the-desc" className={'product_text'}>{infos.description}</p>
                <div className={'card_btn'}>
                    <button data-testid="btn-back" onClick={() => statusRevert()}>{infos.category === 'MyProduct' ? '<Delete' : '<Return'}</button>
                    <button onClick={() => setEditor(true)}>Edit</button>
                    {/!*<button data-testid="btn-next" onClick={() => nextStatus()}>{infos.status === 'DONE' ? 'Delete>' : 'Return>'}</button>*!/}
                </div>
            </div>
        }
    </div>)*/
}