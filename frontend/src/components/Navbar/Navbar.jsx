import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import Badge from '@material-ui/core/Badge';
import {useSelector} from "react-redux";
import {
    NavLink,
    Container,
    Wrapper,
    Left,
    Language,
    SearchContainer,
    Input,
    Center,
    Logo,
    Right,
    MenuItem
} from "./Navbar.styled";


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);

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
                    {!user &&
                        <>
                            <NavLink to="/register">
                                <MenuItem >REGISTER</MenuItem>
                            </NavLink>
                            <NavLink to="/login">
                                <MenuItem>SIGN IN</MenuItem>
                            </NavLink>
                        </>
                    }
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