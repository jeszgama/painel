import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: #fff;
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: #000 ;
  }
  :root {
    
  }
`;