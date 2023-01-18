import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ProductForm = styled.form`
  margin-top: 10px;
  
`;

export const ProductFeatureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FeatureTitle = styled.label`
  color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const FeatureInput = styled.input`
  padding: 10px;
`;

export const AddProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;