import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
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
    background: var(--white);
  }
  :root {
    --black: #0A0A0A;
    --white: #FFFFFF;
    --menu-bar: #0F172A;
    --menu-bar-hover: #707070;
    --letter: #FFC37A;
    --letter-menu: #CA8B3D;
    --visao-geral: #1E293B;
    --highlight: #B53A3A;
    --menu-bar-border:#FFDEB7;
    --verificated: #16A34A;
  }
`;