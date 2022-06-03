import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
export const lightTheme = {
    fontColor : "palevioletred",
    bgColor : "white"
}
export const darkTheme = {
    fontColor : "palevioletred",
    bgColor: "#2c2c2c"
}

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body{
        background-color: ${(props) => props.theme.bgColor}
    }
`