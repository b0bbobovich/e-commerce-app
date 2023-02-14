import styled, { css } from "styled-components";
import { mobile } from '../../responsive';
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined, ExitToApp } from "@material-ui/icons";

const Icon = css`
    fontSize: 16px;
    cursor: pointer;
`;

export const SearchIcon = styled(Search)`
    ${Icon}
`;

export const CartIcon = styled(ShoppingCartOutlined)`
    ${Icon}
`;

export const ExitIcon = styled(ExitToApp)`
    ${Icon}
`;

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

export const Select = styled.select`
    font-size: 14px;
    cursor: pointer; 
    border: none;
    padding: 5px;
    ${'' /* ${mobile({ display: "none" })}; */}
`;

export const Option = styled.option`

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
