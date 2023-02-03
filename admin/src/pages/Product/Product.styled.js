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

export const SubmitForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const FormLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin: 10px 0;
  color: #454545;
`;


export const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;

`;

export const TextArea = styled.textarea`

`;

export const Select = styled.select`
    margin-bottom: 10px;
`;

export const Option = styled.option`

`;

export const FormRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  width: 100%;
  height: fit-content;
  margin: 30px 0;
`;

export const InputFileLabel = styled.label`
  text-align: center;
`;

export const CurrentImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-center: center;
  justify-content: center;
  margin: 10px
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: contain;
`;

export const ImageLabel = styled.span`
  text-align: center;
  max-width: 200px;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; 
           line-clamp: 2; 
   -webkit-box-orient: vertical;
`;

export const UploadInput = styled.input`
  display: none;
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

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
`;


export const IconLabel = styled.span`
  margin-left: 5px;
`;