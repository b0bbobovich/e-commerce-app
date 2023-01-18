import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
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

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>.STORE</Logo>
        </Left>
        <Right>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
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