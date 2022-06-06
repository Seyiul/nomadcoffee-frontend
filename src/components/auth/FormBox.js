import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  h1 {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-size: 40px;
    color: ${(props) => props.theme.green};
  }
  form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

function FormBox({ children }) {
  return <Container>{children}</Container>;
}

export default FormBox;
