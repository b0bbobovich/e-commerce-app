import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`; 
    
export const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
  
export const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

export const Left = styled.div`

`;

export const Right = styled.div`
    display: flex;
    align-items: center;
`;
  
export const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

export const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;