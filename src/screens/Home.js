import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar, darkModeVar, logUserOut } from "../apollo";

const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 50px;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Title>Nomad Coffee</Title>
      <button onClick={() => logUserOut(navigate)}>Log out</button>
    </div>
  );
}

export default Home;
