import styled from "styled-components";
import { isLoggedInVar, darkModeVar, logUserOut } from "../apollo";

const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 50px;
`;

function Home() {
  return (
    <div>
      <Title>Nomad Coffee</Title>
      <button onClick={() => logUserOut()}>Log out</button>
    </div>
  );
}

export default Home;
