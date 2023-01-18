import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProductListContainer = styled.div`
    flex: 4;
    height: 100%;
`;

export const ProductListItem = styled.div`
    display: flex;
    align-items: center;
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

export const EditProduct = styled(Link)`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    text-decoration: none;
`;

export const DeleteProduct = styled.div`
    color: red;
    cursor: pointer;
`;