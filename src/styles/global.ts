import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0;
    }

    body{
        background: ${props => props.theme["white-200"]};
        color: ${props => props.theme['gray-500']};
        --webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, text-area, button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`