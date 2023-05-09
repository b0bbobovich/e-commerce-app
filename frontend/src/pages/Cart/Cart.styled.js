import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})};
`;

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
`;

export const NavLink = styled(Link)`
    font-weight: 600;
    color: black;
    text-decoration: none;
`;

export const TopTextContainer = styled.div`
    ${mobile({ display: "none"})};
`;

export const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

export const Info = styled.div`
    flex: 3;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})};
`;

export const ProductDetail = styled.div`
    flex: 2;
    display: flex;    
`;

export const Image = styled.img`
    width: 200px;
`;

export const Details = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ })};
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.span``;

export const ProductSize = styled.span``;


export const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})};
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})};
`;


export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: max-content;

`;

export const SummaryTitle = styled.h1`
    font-weight: 200;
`;

export const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;