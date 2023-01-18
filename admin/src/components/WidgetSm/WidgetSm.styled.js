import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Username = styled.span`
  font-weight: 600;
`;


export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export const Icon = styled.div`
  font-size: 16px !important;
  margin-right: 5px;
`;

