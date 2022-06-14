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
        background-image: url("https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
        background-repeat:no-repeat;
        background-size: cover;
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:${(props) => props.theme.fontColor};
    }
    a{
        text-decoration: none;
    }
`;
