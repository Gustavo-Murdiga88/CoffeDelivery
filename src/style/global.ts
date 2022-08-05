import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0; 
    box-sizing:border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
}
 body,input, button {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
 }

 body{ 
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["base-text"]}
 }

 button{ 
    cursor: pointer;
 }

 @media (max-width: 1080px) {
  html {
    font-size: 93.7%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`;
