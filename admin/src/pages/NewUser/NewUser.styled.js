import styled from "styled-components";

export const Container = styled.div`
    flex: 4;
`;

export const UserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const UserFeatureContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`;

export const FeatureTitle = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
`;

export const FeatureInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`;

export const GenderFeatureContainer = styled.div`

`;

export const GenderInput = styled.input`
    margin-top: 15px;
`;

export const GenderTitle = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
`;

export const AddUserButton = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`;