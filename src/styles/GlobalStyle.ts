import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 16px;
    background: ${props => props.theme.colors.grayscale.background};
  }

  input, textarea, button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
