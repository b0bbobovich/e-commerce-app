import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const ProductListContainer = styled.div`
    flex: 4;
    display: flex;
    height: 100vh;
    margin: 20px 5px 0 5px;
    
`;

export const ProductListItem = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ProductImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const ProductTitle = styled.span`

`;

export const ActionContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const EditProduct = styled(Link)`
    color: green;
    cursor: pointer;
    text-decoration: none;
    
`;

export const DeleteProduct = styled.div`
    color: red;
    cursor: pointer;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PreloaderContainer = styled.div`
    display: flex;
    height: 300px;
    align-items: center;
    justify-content: center;
`;

export const Preloader = styled.img`
    wisth: 34px;
    height: 34px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

`;