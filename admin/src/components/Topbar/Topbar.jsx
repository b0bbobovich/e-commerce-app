import React from "react";
import { ExitToApp, Language, Settings,  } from "@material-ui/icons";
import {
  Container,
  Wrapper,
  Logo,
  Left,
  Right,
  IconContainer,
  IconBadge,
  Avatar
} from "./Topbar.styled";
import { userRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.currentUser.accessToken);

  const handleLogout = async () => {
  try {
    await userRequest(token).post("/auth/logout");
    dispatch(logout());

  } catch (err) {
    console.error(err)
  }
}

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>.STORE</Logo>
        </Left>
        <Right>
          <IconContainer onClick={handleLogout}>
            <ExitToApp />
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Topbar;