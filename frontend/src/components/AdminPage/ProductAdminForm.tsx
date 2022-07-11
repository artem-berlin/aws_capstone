import {Dispatch, FormEvent, SetStateAction, useState} from "react";




import {CartProductType} from "../../CartMain/CartMainStyles";
import {getAllProducts, postNewProduct} from "../../service/apiService";
import {useAuth} from "../../auth/AuthProvider";

interface ProductFormProps{
    update : Dispatch<SetStateAction<CartProductType[]>>
}

export default function ProductAdminForm({update}: ProductFormProps){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskChange = (text : string)  => setTitle(text)
    const handleDescriptionChange = (text : string)  => setDescription(text)
    const {token} = useAuth()

    const createProduct = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        postNewProduct(title, description, token)
            .then(() => {
                setDescription('')
                setTitle('')
            }).then(()=>
            getAllProducts(token)
                .then(data => update(data)))
    }

    return(
        <div className={'productForm'}>
            <form onSubmit={ev => createProduct(ev)}>
                <input className={'form_title'} type="text" placeholder={'Title'} value={title} onChange={ev => handleTaskChange(ev.target.value)}/>
                <input className={'form_desc'} placeholder={'Description'} value={description} onChange={ev => handleDescriptionChange(ev.target.value)}/>
                {title.length>1 && <button className={'form_btn'} type='submit' >senden</button>}
            </form>
        </div>
    )
}