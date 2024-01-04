import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '40vh' })};
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ display: 'none' })};
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '20px' })};
`;

export const Form = styled.form`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  ${mobile({ width: '80%' })};
`;

export const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  position: relative;
  border: 1px solid lightgray;
  background: none;
  outline: none;
  z-index: 1;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    border: 2px solid teal;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 0;
  pointer-events: none;
  padding: 0 5px;
  font-size: 15px;
  transition: 0.2s;
  ${Input}:focus ~ & {
    z-index: 10;
    top: -10px;
    color: teal;
    background: linear-gradient(180deg, #fcf5f5 50%, white 50%);
  }
  ${Input}:not(:placeholder-shown) ~ & {
    z-index: 10;
    top: -10px;
    color: teal;
    background: linear-gradient(180deg, #fcf5f5 50%, white 50%);
  }
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #045f5f;
  }
`;
