import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #181B23;
    --primary-font: #EEEEF2;
    --primary-secondary: #9699B0;
    --secondary: #1F2029;
    --orange: #DA5C5C;
    --border: #353656;
  }

    /*
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
   */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--background);
    color: var(--primary-font);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: calc(100vh - 8.2rem);
  }

  button,
  body,
  textarea,
  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    color: var(--primary-font)
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: var(--primary-font);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
