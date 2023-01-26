import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserListContainer = styled.div`
    flex: 4;
    height: 100%;
`;
  
export const User = styled.div`
    display: flex;
    align-items: center;
`;
  
export const UserImg = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const EditUser = styled(Link)`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
    text-decoration: none;
`;

export const DeleteUser = styled.div`
    color: red;
    cursor: pointer;
`;
