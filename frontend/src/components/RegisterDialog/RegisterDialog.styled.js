import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { mobile } from "../../responsive";
import { Dialog } from "@material-ui/core";

export const Container = styled(Dialog)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div` 
    width: 500px;
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    ${mobile({ width: "75%"})};
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;  

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    position: relative;
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

export const PasswordInput = styled(Input)`
    border: ${props => props.isMatched ? "1px solid lightgray" : "2px solid crimson"};
    &:focus {
        border: ${props => props.isMatched ? "2px solid teal" : "2px solid crimson"};
    }
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


export const ErrorMessage = styled.span`
    font-size: 14px;
    color: crimson;
    margin: 0 10px;
`;

export const Agrrement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

export const Button = styled.button`
    margin: 0 auto 20px auto;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px; 
`;

export const ErrorContainter = styled.div`
    width: 100%;
    heigth: 50px;
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const LoginButton = styled(Link)`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-decoration: none;
    color: white;
    background: teal;
    padding: 10px;
    border-radius: 5px; 
    border: none;
    cursor: pointer;
`;

export const PreloaderContainer = styled.div`
    margin: 10px auto 20px auto;
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

