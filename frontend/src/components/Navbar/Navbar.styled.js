import styled from "styled-components";
import { mobile } from '../../responsive';
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const Container = styled.div`
`;

export const Wrapper = styled.div`
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })};
`;


export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
    ${mobile({ display: "none" })};
`;

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;

export const Input = styled.input`
    padding: 5px;
    border: none;
    ${mobile({ width: "50px" })};
`;

export const Center = styled.div`
    flex: 1;
    
`;

export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})};
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})};
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
`;
