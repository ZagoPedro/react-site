import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1E1E1E;
    font-family: Cambria;
    font-style: italic;
    color: #FFFFFF;

    ::-webkit-scrollbar { background: #1E1E1E; }
    ::-webkit-scrollbar-thumb {background: #3C3C3C; }
  }
`;

export default GlobalStyle;
