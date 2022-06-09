import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Footer = styled.footer`
  margin-top: 20px;
`;

function HomeLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer></Footer>
    </Container>
  );
}

export default HomeLayout;
