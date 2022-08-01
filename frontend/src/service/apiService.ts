
import {Credentials, CredentialsRegister, LineItem} from "../interfaces/interfaces";


import {CartProductType} from "../CartMain/CartMainStyles";
const apibaseURL=process.env.REACT_APP_BASE_URL
export const registerNewUser = ({email, password, passwordAgain} : CredentialsRegister) => {
    return fetch(apibaseURL+`/api/clients`,{                                                                     //apibaseURL+
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email':email, 'password':password, 'passwordAgain':passwordAgain})
    })
        .then(response => response.json())
}

export const loginUser = ({email, password} : Credentials) =>{
    return fetch(apibaseURL+`/api/auth/login`,{                                                                  //apibaseURL+
        method: 'POST',
        headers: {
           // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email':email, 'password':password})
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            } else if (response.status === 403) {
                throw new Error(`$('bad-credentials-error')`)
            } else {
                throw new Error(`$('error-code') ${response.status}`)
            }

    })

}
/*
export const getAllProducts = (token: string) => {
    return fetch(`/api/product`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => response.json())
}
*/
export const postNewProduct = (task: string, descript: string, token: string) => {
    return fetch(apibaseURL+`/api/product`, {                                                                  //apibaseURL+
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'task':task, 'description':descript})
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}



export const updateProduct = (id: string, product : CartProductType, token: string) => {
    return fetch(apibaseURL+`/api/product/${id}`,{                                                     //apibaseURL+
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}


export const getAllProducts = (token: string) => {
    return fetch(apibaseURL+`/api/main`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(response => response.json())
}



export const getProductById = (id : string, token: string) => {
     return fetch(apibaseURL+`/api/main/${id}`,{
         headers: {
             Authorization: `Bearer ${token}`
         }
     })
        .then(response => {
            if (response.ok){
              return response.json()
            } else {
                throw Error("No Product with id "+id+" exist!")
            }
        })
}

export const deleteProduct = (id: string, token: string) => {
    return fetch(apibaseURL+`/api/product/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}

export const getProductsByCategory = ( token: string, category: string) => {

    return fetch(apibaseURL+`/api/main/search?category=${category}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))

}
export const checkoutTotal = (token: string,lineItems : LineItem[])=> {
    return fetch (apibaseURL+'/api/shoppingcart', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: lineItems })
    })
}
export const getShoppingCartById =( token : string, id : string) =>{
    return fetch(apibaseURL+'/api/shoppingcart/'+ id, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
        })
        .then (response => response.json())
        .catch(e => console.log(e.message))


}