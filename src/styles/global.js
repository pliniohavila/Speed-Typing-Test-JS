import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body {
        background-color: #f0f0f0;
    }

    textarea {
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1rem;
    }
`
