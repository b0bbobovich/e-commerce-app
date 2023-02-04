import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const TopBar = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 20px;
`;

export const LeftBar = styled.div`
    flex: 2;
`;

export const RightBar = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: max-content;
`;

export const SectionInfo = styled.div`
    margin-top: 10px;
`;

export const SectionTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ flexDirection: "column" })};
`;

export const ProductDetails = styled.div`
    flex: 2;
    display: flex;   
`;

export const Image = styled.img`
    width: 100px;
`;

export const Details = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ })};
`;

export const ProductName = styled.span``;


export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

export const ProductSize = styled.span``;


export const OrderDetailsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const OrderDetailsTitle = styled.span`
    font-weight: 800;
`;

export const OrderDetails = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})};
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

export const SummaryItemText = styled.span`
`;

export const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 5px;
    width: 100%;
    border: 0.5px solid lightgray;
`;