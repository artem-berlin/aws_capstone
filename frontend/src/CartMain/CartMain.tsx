import React, {useEffect, useState} from 'react';

import Cart from '../Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

import { Wrapper, StyledButton } from '../App.styles';
import Product from "../Product/Product";
import {CartProductType, SearchContainer} from "./CartMainStyles";
import {getAllProducts, getProductsByCategory} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";
import {Language, Search} from "@material-ui/icons";

import { Input } from '@material-ui/core';


const CartMain = () => {

    const {token} = useAuth();

    const [cartOpen, setCartOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([] as CartProductType[]);
    const [data, setData] = useState([] as CartProductType[])
    const [category, setCategory] = useState('')

    useEffect(() => {
        getAllProducts(token)
            .then((products: Array<CartProductType>) => setData(products));
    }, [token])

    const searchByCategory = (searchCategory?: string) => {
        getProductsByCategory(token, searchCategory ?? category)
            .then((products: Array<CartProductType>) => setData(products));
    }


    console.log(data);

    const searchAll = () =>{
        getAllProducts(token)
            .then((products: Array<CartProductType>) => setData(products));

    }

    const getTotalProducts = (items: CartProductType[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedProduct: CartProductType) => {
        setCartProducts(prev => {
            // 1. Is the product already added in the cart?
            const isProductInCart = prev.find(item => item.id === clickedProduct.id);

            if (isProductInCart) {
                return prev.map(item =>
                    item.id === clickedProduct.id
                        ? {...item, amount: item.amount + 1}
                        : item
                );
            }
            // First time the product is added
            return [...prev, {...clickedProduct, amount: 1}];
        });
    };

    const handleRemoveFromCart = (id: string) => {
        setCartProducts(prev =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as CartProductType[])
        );
    };

    return (
        <Wrapper>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartProducts={cartProducts}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>

            <SearchContainer>
                <Input placeholder="Search" onChange={(ev) => setCategory(ev.target.value)} />
                <button onClick={() => searchByCategory()}>Search</button>

                <Search style={{color: "gray", fontSize: 16}}/>
                <button onClick={searchAll}>All Categories</button>
                <button onClick={() => searchByCategory('it-books')}>it-books</button>
                <button onClick={() => searchByCategory('T-shirt')}>T-Shirts</button>
                <button onClick={() => searchByCategory('cd')}>CDs</button>
            </SearchContainer>

            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalProducts(cartProducts)} color='error'>
                    <AddShoppingCartIcon/>
                </Badge>
            </StyledButton>

            <Grid container spacing={3}>
                {data?.map(product => (
                    <Grid item key={product.id} xs={12} sm={4}>
                        <Product product={product} handleAddToCart={handleAddToCart}/>

                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
}

export default CartMain;
