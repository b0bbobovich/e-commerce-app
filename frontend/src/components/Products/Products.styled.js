import styled, { keyframes }  from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const PreloaderContainer = styled.div`
    margin: 20px 0 50px 0;
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

