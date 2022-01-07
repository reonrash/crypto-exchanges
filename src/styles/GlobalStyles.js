import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial';
    }
    
    html {
        font-size: 100%;
    }

    h1 {
        font-size: 2.5rem;
    }
    
    p {
        line-height: 1.6;
    }`;

export default GlobalStyles;
