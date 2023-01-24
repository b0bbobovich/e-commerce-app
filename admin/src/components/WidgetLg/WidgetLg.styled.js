import styled from "styled-components";
import {mobile, tablet, desktop, desktopLarge, widescreen } from "../../responsive";

export const Container = styled.div`
    max-height: 500px;
    overflow: auto;
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
    ${mobile({display: "flex", flexDirection: "column"})}

`;

export const TableHeader = styled.th`
    text-align: left;
    ${mobile({display: "none"})};
`;

export const User = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;


export const Email = styled.span`
    flex: 2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


export const Date = styled.td`
    flex: 2;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Amount = styled.td`
    flex: 1;
    font-weight: 300;
`;

export const Button = styled.button`
    flex: 1;
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    color: ${props => {
        if (props.type === "approved") {
            return "#3bb077"
        }
        else if (props.type === "declined") {
            return "#d95087"
        }
        else {
            return "#2a7ade"
        }
    }};
    background-color: ${props => {
            if (props.type === "approved") {
                return "#e5faf2"
            }
            else if (props.type === "declined") {
                return "#fff0f1"
            }
            else {
                return "#ebf1fe"
            }
    }}
`;  