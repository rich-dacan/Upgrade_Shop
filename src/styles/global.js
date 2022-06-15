import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  :root {
    // GREY SCALE PALETTE
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey: #121214;

    //FEEDBACK PALETTE
    --toastify-color-light: var(--grey-2);
    --toastify-icon-color-success:#3FE864;
    --toastify-color-progress-success: #3FE864;
    --toastify-text-color-light:var(--grey-0);
    --success: #3FE864;
    --error: #E83F5B;
  }

  body {
    background-color: #000;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  body, input, button {
    font-size: 1rem;

  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    height: 5px;    
    width: 5px ;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #A62E2E;    
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
  }

`