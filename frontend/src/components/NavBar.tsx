import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider";


const Container = styled.div`
  height: 60px;
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
 
`;

const NavBar = () => {
   const nav= useNavigate();
   const{token}=useAuth();                ////token hjhs
    const {logout} = useAuth();
  return (
    <Container>
      <Wrapper>
        <Left>

        </Left>
        <Center>
          <Logo> Artem's Web Shop</Logo>
        </Center>
        <Right>
            {token
                ?
                <div>
                    <MenuItem onClick={logout}> LOGOUT</MenuItem>
                </div>
                :
                <div>
                    <MenuItem onClick={() => nav("/register")}> REGISTER/SIGN IN</MenuItem>
                </div>
            }

         {/* <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>*/}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
