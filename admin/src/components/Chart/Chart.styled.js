import styled from "styled-components";
import {tablet, desktop, widescreen } from "../../responsive";

export const Container = styled.div`

    margin: 20px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15-10px rgba(0, 0, 0, 0.75);
    ${tablet({ padding: "20px" })};
    ${desktop({ padding: "20px" })};
    ${widescreen({padding: "20px"})};
`;

export const Title = styled.h3`
    margin-bottom: 10px;
    ${tablet({ marginBottom: "20px" })};
    ${desktop({ marginBottom: "20px" })};
    ${widescreen({ marginBottom: "20px"})};
`;
