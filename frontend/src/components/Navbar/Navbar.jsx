import { Search, ShoppingCartOutlined, ExitToApp } from "@material-ui/icons";
import React from "react";
import Badge from '@material-ui/core/Badge';
import {useDispatch, useSelector} from "react-redux";
import {
    NavLink,
    Container,
    Wrapper,
    Left,
    Select,
    Option,
    SearchContainer,
    Input,
    Center,
    Logo,
    Right,
    MenuItem,
    SearchIcon,
    CartIcon,
    ExitIcon
} from "./Navbar.styled";
import { logout } from "../../redux/userSlice";


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                <Select defaultValue="EN" name="Language">
                        <Option>EN</Option>
                        <Option>UA</Option>
                    </Select>
                    <SearchContainer>
                        <SearchIcon />
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
                    {!user
                        ?
                        <>
                            <NavLink to="/register">
                                <MenuItem >REGISTER</MenuItem>
                            </NavLink>
                            <NavLink to="/login">
                                <MenuItem>SIGN IN</MenuItem>
                            </NavLink>
                        </>
                        : <ExitIcon onClick={handleLogout} />
                    }
                    <NavLink to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                                <CartIcon />
                            </Badge>
                        </MenuItem>
                    </NavLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar