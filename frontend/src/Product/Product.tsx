import Button from '@material-ui/core/Button';

import { Wrapper } from './Product.styles';
import {CartProductType} from "../CartMain/CartMainStyles";
import {useNavigate} from "react-router-dom";

type Props = {
  product: CartProductType;
  handleAddToCart: (clickedProduct: CartProductType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
    const nav = useNavigate();
    return(
  <Wrapper>
    <img onClick={()=> nav(`/${product.id}`) } src= {product.image} alt={product.title} />
    <div>
      <h3>{product.title}</h3>
        <p>{product.category}</p>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
  </Wrapper>
);
}
export default Product;
