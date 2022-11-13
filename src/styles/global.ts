import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.2s;
  }

  body, input, textarea, button {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.colors.title};
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  main {
    padding: 2rem;
  }
`;
