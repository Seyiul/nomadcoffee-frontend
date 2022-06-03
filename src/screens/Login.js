import styled from 'styled-components'
import { isLoggedInVar, darkModeVar } from '../apollo'

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`
const Button = styled.button`
    background-color: palevioletred;
    border-radius: 5px;
    border-style: none;
    color: #FFFFFF;
    cursor: pointer;
    margin: 10px;
    outline: none;
    text-align: center;
    text-decoration: none;
`


function Login(){
    return(
        <div>
            <Title>Login</Title>
            <Button onClick={()=>isLoggedInVar(true)}>Log In</Button>
            <Button onClick={() => darkModeVar(false)}>To Light</Button>
            <Button onClick={() => darkModeVar(true)}>To dark</Button>
        </div>
    )
}

export default Login