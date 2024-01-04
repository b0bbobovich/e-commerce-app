import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  height: 95%;
  flex: 1;
  display: flex;
  align-self: flex-end;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
