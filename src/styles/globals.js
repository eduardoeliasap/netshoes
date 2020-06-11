import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://font.googleapis.com/css?family=Roboto:400,700&display=swap');

  /* O asterisco indica que todos estidos declarados aqui são para todos as telas */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920;
    -webkit-font-smothing: antialiased;
  }

  body, input, butto {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
