import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
        url("https://i.ibb.co/pyGy0cS/pexels-photo-6984650.jpg") center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
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
    margin: 10px 10px 0 0;
    padding: 10px;
`;

export const Input = styled.input`
    padding: 5px;
    width: 100%;
    height: 30px;
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
    top: 22px;
    left: 10px;
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
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 5px; 
`;

export const LoginButton = styled(Link)`
    margin: 10px auto;
    text-decoration: none;
    color: white;
    background: teal;
    padding: 10px;
    border-radius: 5px; 
`;

export const PreloaderContainer = styled.div`
    margin-top: 50px;
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

