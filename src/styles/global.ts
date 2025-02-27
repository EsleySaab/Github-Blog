import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-200"]};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: "Nunito", serif;
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    all: unset;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
