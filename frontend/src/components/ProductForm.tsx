import {Dispatch, FormEvent, SetStateAction, useState} from "react";


import './ProductForm.css'

import {CartProductType} from "../CartMain/CartMainStyles";
import {getAllProducts, postNewProduct} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";


interface ProductFormProps{
    update : Dispatch<SetStateAction<CartProductType[]>>
}

export default function ProductForm({update}: ProductFormProps){

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskChange = (text : string)  => setTask(text)
    const handleDescriptionChange = (text : string)  => setDescription(text)
    const {token} = useAuth()

    const createProduct = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        postNewProduct(task, description, token)
            .then(() => {
                setDescription('')
                setTask('')
            }).then(()=>
            getAllProducts(token)
                .then(data => update(data)))
    }

    return(
        <div className={'productForm'}>
            <form onSubmit={ev => createProduct(ev)}>
                <input className={'form_task'} type="text" placeholder={'Product'} value={task} onChange={ev => handleTaskChange(ev.target.value)}/>
                <input className={'form_desc'} placeholder={'Description'} value={description} onChange={ev => handleDescriptionChange(ev.target.value)}/>
                {task.length>1 && <button className={'form_btn'} type='submit' >senden</button>}
            </form>
        </div>
    )
}