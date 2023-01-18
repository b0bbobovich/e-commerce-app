import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import { mobile } from '../responsive';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";


const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })};
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;

const Input = styled.input`
    padding: 5px;
    border: none;
    ${mobile({ width: "50px" })};
`;

const Center = styled.div`
    flex: 1;
    
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search style={{color: "grey", fontSize: 16}} />
                        <Input placeholder="Search" autoComplete="off"/>
                    </SearchContainer>
                </Left>
                <Center>
                    <NavLink to="/" >
                        <Logo>
                            STORE.
                        </Logo>
                    </NavLink>
                </Center>
                <Right>
                    <NavLink to="/register">
                        <MenuItem >REGISTER</MenuItem>
                    </NavLink>
                    <NavLink to="/login">
                        <MenuItem>SIGN IN</MenuItem>
                    </NavLink>
                    <NavLink to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar