import { createGlobalStyle } from 'styled-components';
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #161A1E;
    font-family: "Roboto";
    font-style: italic;
    color: #FFFFFF;

    ::-webkit-scrollbar { background: #161A1E; }
    ::-webkit-scrollbar-thumb { background: #1F2022; }
  }
`;

export default GlobalStyle;
