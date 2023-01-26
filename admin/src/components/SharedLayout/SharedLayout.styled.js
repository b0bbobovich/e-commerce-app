import styled from "styled-components";
import {desktop, desktopLarge, widescreen } from "../../responsive";


export const ComponentContainer = styled.div`
    margin-bottom: 50px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "header"
        "content";

    ${desktop({
        gridTemplateAreas: "'header header' 'sidebar content'",
        gridTemplateColumns: "200px 824px",
        justifyContent: "center"
    })};

    ${desktopLarge({
        gridTemplateColumns: "200px auto",
        justifyContent: "unset"

    })};

    ${widescreen({
        gridTemplateColumns: "200px 2000px",
        justifyContent: "center"
    })};


`;

export const HeaderContainer = styled.header`
    grid-area: header;
`;

export const NavbarContainer = styled.aside`
    grid-area: sidebar;
    z-index: 999;
    display: none;
    height: 100%;
    ${desktop({ display: "block !important"} )} ;
`;


export const ContentContainer = styled.section`
    grid-area: content;

`;


export const ToggleBtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 40px;
    margin: 10px 20px 0 20px;
    cursor: pointer;
    ${desktop({ display: "none" })};
`;

export const ToggleLable = styled.span`
    width: 100%;
    margin-left: 10px;
    font-size: 20px;
`;
