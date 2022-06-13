import { useReactiveVar } from "@apollo/client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar, logUserOut } from "../apollo";
import routes from "../routes";
import useUser from "../hooks/useUser";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
  margin-left: 20px;
  cursor: pointer;
`;

const Logo = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.green};
`;

function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const navigate = useNavigate();
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <Link to={routes.home}>
            <Logo>Nomad Coffee</Logo>
          </Link>
        </Column>
        <Column>
          {isLoggedIn ? (
            <>
              <Icon onClick={() => logUserOut(navigate)}>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Icon>
            </>
          ) : null}
        </Column>
      </Wrapper>
    </SHeader>
  );
}
export default Header;
