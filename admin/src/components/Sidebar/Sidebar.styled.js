import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100%;
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 0px;
`;

export const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`;
  

export const SidebarMenu = styled.div`
    margin-bottom: 10px;    
`;
  
export const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
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
    color: ${props => props.inactive ? "lightgrey" : "lightblack"};
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
