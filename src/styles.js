import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const lightTheme = {
  green: "#00704a",
  borderColor: "rgb(219, 219, 219)",
};
export const darkTheme = {
  fontColor: "palevioletred",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input{
        all:unset
    }
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #fafafa;
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:rgb(38,38,38);
    }
    a{
        text-decoration: none;
    }
`;
