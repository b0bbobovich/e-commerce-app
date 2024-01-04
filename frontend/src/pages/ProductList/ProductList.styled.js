import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
  })};
`;

export const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({ margin: '0 20px', flexDirection: 'column', alignItems: 'start' })};
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const SelectContainer = styled.div`
  display: flex;
  margin: 0 0 0 20px;
  gap: 20px;
  ${mobile({ margin: '10px 0' })};
`;

export const Select = styled.select`
  padding: 10px;
`;

export const Option = styled.option``;
