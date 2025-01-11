import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Kanit', sans-serif;
        margin : 0;
        padding : 0;
        outline : none;
        border : none;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        background : white;
    }
    button {
        background: tranparent;
        cursor : pointer;
        &.active, &:hover{
            opacity : 0.7
        }
    }
`
 
export default GlobalStyle;