import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  
   color: blue;
    background-color:yellow;

    font-size: 1.1rem;
`;



export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;

  padding: 5px;
 
`;

export const Input = styled.input`
  border: none;
  
`;
export type CartProductType = {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};