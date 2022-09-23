import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --blue: #00A8E8;
        --ocean-blue: #14222B;
        --white: #FFFFFF;
        --black: #000000;
        --gray: #7F7F7F;
        --silver: #C9C9C9;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
