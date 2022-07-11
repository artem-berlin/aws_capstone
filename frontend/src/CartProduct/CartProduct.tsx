import Button from '@material-ui/core/Button';

import { Wrapper } from './CartProduct.styles';
import {CartProductType} from "../CartMain/CartMainStyles";
import React from "react";
type Props = {
  product: CartProductType;
  addToCart: (clickedProduct: CartProductType) => void;
  removeFromCart: (id:string) => void;

};

const CartProduct: React.FC<Props> = ({ product, addToCart, removeFromCart, }) => (
    <Wrapper>
      <div>
        <h3>{product.title}</h3>
        <div className='information'>
          <p>Price: ${product.price}</p>
          <p>Total: ${(product.amount * product.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
              size='small'
              disableElevation
              variant='contained'
              onClick={() => removeFromCart(product.id)}
          >
            -
          </Button>
          <p>{product.amount}</p>
          <Button
              size='small'
              disableElevation
              variant='contained'
              onClick={() => addToCart(product)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={product.image} alt={product.title}/>
    </Wrapper>
);

export default CartProduct;
