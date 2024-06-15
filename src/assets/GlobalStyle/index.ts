import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
    }

    body {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
    }

    body, input, button {
        font-family: 'Inter', 'Noto Sans', serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
`;
