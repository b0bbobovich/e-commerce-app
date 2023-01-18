import styled from "styled-components";

export const Container = styled.div`
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

`;

export const TableHeader = styled.th`
    text-align: left;
`;

export const User = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;


export const Date = styled.td`
    font-weight: 300;
`;

export const Amount = styled.td`
    font-weight: 300;
`;

export const Button = styled.button`
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