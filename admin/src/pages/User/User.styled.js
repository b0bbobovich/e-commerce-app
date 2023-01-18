import styled from "styled-components";


export const Section = styled.div`
    flex: 4;
    padding: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
`;

export const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const UserInfoContainer = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const TopInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const Username = styled.span`
    font-weight: 600;
`;

export const UserTitle = styled.span`
    font-weight: 300;
`;

export const BottomContainer = styled.div`
    margin-top: 20px;
`;

export const InfoTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`;

export const InfoIcon = styled.div`
    font-size: 16px !important;
`;

export const UserInfo = styled.span`
    margin-left: 10px;  
`;

export const UpdatingInfoContainer = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`;

export const UpdateContainerTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`;

export const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const LeftContainer = styled.div`

`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const UpdatingItem = styled.div`
    margin-bottom: 5px;
    font-size: 14px;
    
`;

export const UpdatingItemTitle = styled.label`
    margin-right: 10px;
    font-size: 14px;
    margin-right: 30px;
`;

export const UpdatingItemInput = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`;

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CurrentUserImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: contain;
    margin-right: 20px;
`;

export const UploadIcon = styled.div`
    cursor: pointer;
`;

export const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`;
