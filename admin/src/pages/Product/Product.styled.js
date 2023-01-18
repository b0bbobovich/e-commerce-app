import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddProductButton = styled(Link)`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 1;
`;

export const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const RightTopContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const RightBottomContainer = styled.div`
  margin-top: 10px;
`;

export const ProductFeatureContainer = styled.div`

  display: flex;
  justify-content: space-between;
`;

export const FeatureName = styled.span`
  font-weight: 600;
  color: #454545;
`;

export const FeatureValue = styled.span`

  font-weight: 300;
  color: gray;
`;

export const BottomContainer = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpdatingItemTitle = styled.label`
  margin: 10px 0;
  color: #454545;
`;

export const UpdatingItemInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;

`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;

`;

export const CurrentProductImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: contain;
  margin-right: 20px;
`;

export const FormRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UpdateButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color:white;
  font-weight: 600;
  cursor: pointer;
`;

export const UploadIcon = styled.div`
  cursor: pointer;
`;