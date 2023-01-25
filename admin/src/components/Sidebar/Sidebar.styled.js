import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { desktop } from "../../responsive.js";



export const Container = styled.div`
    height: 100%;
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 0px;

`;

export const Wrapper = styled.div`
    padding: 20px;
    color: #555;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    border: none;
    background-color: rgb(251, 251, 255);
    color: #36454F;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgb(240, 240, 255);
    };
    ${desktop({display: "none"})};
`;
  

export const SidebarMenu = styled.div`
    margin-bottom: 10px;    
`;
  
export const SidebarTitle = styled.h3`
    font-size: 13px;
    color: #D3D3D3;
`; 

export const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const SidebarListItem = styled.li`
    padding: 5px;
    cursor: ${props => !props.inactive && "pointer"};
    display: flex;
    align-items: center;
    border-radius: 10px;
    text-decoration: none !important;
    color: ${props => props.inactive ? "#D3D3D3" : "#36454F"};
    &:active,
    ${props => !props.inactive && css`
        &:hover {
            background-color: rgb(240, 240, 255);
        `
    }}
`;

export const SidebarIcon = styled.div`
    margin-right: 5px;
    font-size: 20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
`;
