import styled, {keyframes} from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { Dialog } from '@mui/material';


export const Container = styled(Dialog)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    background-color: white;
    border-radius: 15px;
    ${mobile({ width: "75%"})};
`;

export const Content = styled.div`
    width: 280px;
    margin: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;  

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    position: relative;
    flex: 1;
    min-width: 40%;
    margin: 10px 5px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    padding: 10px;
    flex: 1;
    width: 100%;
    height: 40px;
    position: relative;
    border: 1px solid lightgray;
    background: none;
    outline: none;
    z-index: 1;
    &::placeholder {
        color: transparent;
    };
    &:focus {
        border: 2px solid teal;
    };
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        box-shadow: 0 0 0 30px white inset !important;
    };
`;

export const Label = styled.label`
    position: absolute;
    top: 10px;
    left: 5px;
    z-index: 0;
    pointer-events: none;
    padding: 0 5px;
    font-size: 15px;
    transition: 0.2s;
    color: grey;
    ${Input}:focus ~ & {
        z-index: 10;
        top: -10px;
        background: white;
        color: teal;
    };
    ${Input}:not(:placeholder-shown) ~ & {
        z-index: 10;
        top: -10px;
        background: white; 
    };
`;

export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px auto 10px auto;
    &: disabled {
        color: teal;
        cursor: not-allowed;
    }
`;

export const NavLink = styled(Link)`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
    &:active {
        color: teal;
    }
`;

export const Error = styled.span`
    max-width: 100%;
    margin: 5px auto 10px auto;
    color: red;
`

export const PreloaderContainer = styled.div`
    margin: 20px auto 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.img`
    width: 34px;
    height: 34px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
`;