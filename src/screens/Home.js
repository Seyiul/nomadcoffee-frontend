import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import HomeLayout from "../components/Home/HomeLayout";
import { BaseBox } from "../components/shared";
import routes from "../routes";
import { Link } from "react-router-dom";

const GET_COFFEESHOPS = gql`
  query seeCoffeeShops($page: Int) {
    seeCoffeeShops(page: $page) {
      id
      name
      user {
        name
      }
    }
  }
`;

const List = styled(BaseBox)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.bgColor};
  }
`;
const Container = styled.div`
  a {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_COFFEESHOPS, {
    variables: { page: null },
  });
  return (
    <HomeLayout>
      <div>
        {data?.seeCoffeeShops?.map((shop) => (
          <Container key={shop.id}>
            <Link to={`shop/${shop.id}`} state={{ id: shop.id }}>
              <List>
                <span>{shop.name}</span>
                <span>{shop.user.name}</span>
              </List>
            </Link>
          </Container>
        ))}
      </div>
    </HomeLayout>
  );
}

export default Home;
