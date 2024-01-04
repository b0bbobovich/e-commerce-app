import React from 'react';
import {
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
  NavLink,
  Wrapper,
} from './HeroSection.styled';

const HeroSection = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Wrapper bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} alt={item.alt} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <NavLink to='/products'>
              <Button>SHOP NOW</Button>
            </NavLink>
          </InfoContainer>
        </Wrapper>
      ))}
    </>
  );
};

export default HeroSection;
