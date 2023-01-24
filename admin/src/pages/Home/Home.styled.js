import styled from "styled-components";
import {desktop, desktopLarge, widescreen } from "../../responsive";


export const Container = styled.div`
    
`;

export const WidgetsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    ${desktopLarge({ flexDirection: "row"})};
    ${widescreen({flexDirection: "row"})};
`;