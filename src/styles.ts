import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
    font-family: "Barlow", sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: linear-gradient(to top right, #00060B, #0F171E, #18222c);
    background-position: center;
    background-size: 100%;
    background-attachment: fixed;
  }
`;
 
export default GlobalStyle;