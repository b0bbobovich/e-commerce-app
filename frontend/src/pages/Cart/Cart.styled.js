import styled, { keyframes } from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { Link } from 'react-router-dom';
import { Clear } from '@material-ui/icons';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })};
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
`;

export const NavLink = styled(Link)`
  font-weight: 600;
  color: black;
  text-decoration: none;
`;

export const TopTextContainer = styled.div`
  ${mobile({ display: 'none' })};
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: 'column-reverse' })};
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  height: 200px;
  justify-content: space-between;
  border: solid 1px lightgray;
  border-radius: 10px;
  margin: 0 20px 20px 0;
  ${tablet({ margin: '20px 0' })};
`;

export const Image = styled.img`
  width: 200px;
  object-fit: contain;
  ${mobile({ width: '100px' })}
`;

export const Details = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ gap: '10px', padding: '0', justifyContent: 'center' })}
`;

export const ClearButton = styled(Clear)`
  margin: 10px;
  cursor: pointer;
  ${mobile({ margin: '5px' })}
`;

export const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'start', gap: '15px' })}
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${mobile({ display: 'none' })}
`;

export const ProductColor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const Option = styled.option``;

export const ProductSize = styled.span``;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

export const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

export const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'start', gap: '10px' })}
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: max-content;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
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
