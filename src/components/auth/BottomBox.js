import { BaseBox } from "../shared";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SBottomBox = styled(BaseBox)`
  padding: 20px 40px;
  text-align: center;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.green};
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}
export default BottomBox;
