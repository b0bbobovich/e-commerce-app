import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
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
  LoginIcon,
  IconLabel,
  LogoutIcon,
  RegisterIcon,
} from './Navbar.styled';
import { logout } from '../../redux/userSlice';
import {
  openRegisterDialog as showRegisterForm,
  openLoginDialog as showLoginForm,
} from '../../redux/modalSlice';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const openRegisterDialog = () => {
    dispatch(showRegisterForm());
  };

  const openLoginDialog = () => {
    dispatch(showLoginForm());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Select defaultValue='EN' name='Language'>
            <Option>EN</Option>
            <Option>UA</Option>
          </Select>
          <SearchContainer>
            <SearchIcon />
            <Input placeholder='Search' autoComplete='off' />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to='/'>
            <Logo>STORE.</Logo>
          </NavLink>
        </Center>
        <Right>
          {!user ? (
            <>
              <MenuItem onClick={openRegisterDialog}>
                <RegisterIcon />
                <IconLabel>REGISTER</IconLabel>
              </MenuItem>
              <MenuItem onClick={openLoginDialog}>
                <LoginIcon />
                <IconLabel>SIGN IN</IconLabel>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon />
                <IconLabel>LOGOUT</IconLabel>
              </MenuItem>
              <NavLink to='/cart'>
                <MenuItem>
                  <Box sx={{ marginRight: '10px' }}>
                    <Badge
                      badgeContent={quantity}
                      overlap='rectangular'
                      color='primary'
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                      <CartIcon />
                    </Badge>
                  </Box>
                  <IconLabel>CART</IconLabel>
                </MenuItem>
              </NavLink>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
