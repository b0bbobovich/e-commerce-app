import styled from "styled-components";
import { tablet, desktop, widescreen } from "../../responsive";

export const ComponentContainer = styled.div`
      
`;

export const SelectContainer = styled.div`
      display: flex;
      margin: 20px 20px;
      align-items: center;
      height: 30px;
`;

export const Label = styled.label`
      font-size: 20px;
      color: gray;
      display: none;
      ${desktop({ display: "block" })};
      ${widescreen({display: "block"})};
`;

export const Select = styled.select`
      margin-left: 10px;
      height: 100%;
      max-width: 150px;
`;

export const Option = styled.option`

`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${tablet({ flexDirection: "row" })};
    ${desktop({ flexDirection: "row" })};
    ${widescreen({flexDirection: "row"})};
    
`;

export const Item = styled.div`
    flex: 1;
    margin: 10px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    ${tablet({ margin: "0px 20px" })};
    ${desktop({ margin: "0px 20px" })};
    ${widescreen({margin: "0px 20px"})};
`;
  
export const Title = styled.span`
      font-size: 20px;
`;
  
export const MoneyContainer = styled.div`
      margin: 10px 0px;
      display: flex;
      align-items: center;
`;
  
export const Money = styled.span`
      font-size: 30px;
      font-weight: 600;
`;
  
export const MoneyRate = styled.span`
      display: flex;
      align-items: center;
      margin-left: 20px;
`;
  
export const FeatureSub = styled.span`
      font-size: 15px;
      color: gray;
`;

export const Icon = styled.div`
      font-size: 14px;
      margin-left: 5px;
      display: ${props => props.disabled ? "none" : "block"};
      color: ${props => props.positive ? "green" : "red"};
`;