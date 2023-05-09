import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`

`;

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})};
`;

export const SliderContainer = styled.div`
    flex: 1;
    position: relative;
    width: auto;
    height: 100vh;
    overflow: hidden;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */
`;

export const SlideWrapper = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1.5s ease;
    transform: translateX(${props => props.displacement});
`;

export const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

export const Slide = styled.div`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.div` 
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    ${mobile({height: "40vh"})};
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px"})};
`;

export const Title = styled.h1`
    font-weight: 200;
`;

export const Description = styled.p`
    margin: 20px 0;
`;

export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

export const Select = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

export const Option = styled.option``;

export const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

export const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    bacground-color: white;
    cursor: pointer;
    font-weight: 500;
    &: hover {
        background-color: #f8f4f4;
    }
`;


export const PreloaderContainer = styled.div`
    margin-top: 200px;
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