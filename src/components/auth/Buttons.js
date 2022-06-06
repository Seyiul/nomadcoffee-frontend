import styled from "styled-components";

const Button = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${(props) => props.theme.green};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;
export default Button;
