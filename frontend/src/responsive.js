import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 2560px) {
      ${props}
    }
  `;
};

export const widescreen = (props) => {
  return css`
    @media only screen and (min-width: 2560px) {
      ${props}
    }
  `;
};
