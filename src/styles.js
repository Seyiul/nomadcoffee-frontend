import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const lightTheme = {
  green: "#00704a",
  bgColor: "#fafafa",
  fontColor: "rgb(38,38,38)",
  borderColor: "rgb(219, 219, 219)",
};
export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
  green: "#00704a",
  borderColor: "rgb(219, 219, 219)",
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
        background-color: ${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:${(props) => props.theme.fontColor};
    }
    a{
        text-decoration: none;
    }
`;
