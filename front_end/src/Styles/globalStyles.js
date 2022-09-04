import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Times New Roman', Times, serif;
    }
    
    html, body, #root{
        width:100vw;
        height:100vh;
    }

    :root{
        --main-color:#DF2935;
    }
`;

export default Global;