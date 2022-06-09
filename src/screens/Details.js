import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.green};
  margin-bottom: 30px;
  font-size: 2em;
  text-transform: uppercase;
  font-family: "Pacifico", cursive;
`;

const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 50px;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  img {
    width: 50%;
    margin-bottom: 30px;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  text-transform: uppercase;
  p {
    margin-top: 10px;
  }
`;

const Categories = styled.div`
  span {
    margin-left: 10px;
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.bgColor};
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

const SEE_COFFEESHOP = gql`
  query seeCoffeeShop($id: Int!) {
    seeCoffeeShop(id: $id) {
      id
      name
      latitude
      longitude
      user {
        name
      }
      photos {
        url
      }
      categories {
        name
      }
    }
  }
`;

function Details() {
  const location = useLocation();

  const { loading, error, data } = useQuery(SEE_COFFEESHOP, {
    variables: { id: location?.state?.id },
  });

  console.log(data);

  return (
    <Container>
      <Wrapper>
        <Title>{data?.seeCoffeeShop?.name}</Title>
        <img
          src={
            data?.seeCoffeeShop?.photos?.length == 0
              ? "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg "
              : data?.seeCoffeeShop?.photos.url
          }
        ></img>
        <DetailInfo>
          <div>
            <span>🌐 {data?.seeCoffeeShop?.latitude}°N, </span>
            <span>{data?.seeCoffeeShop?.longitude}°E</span>
          </div>
          <p>😊 {data?.seeCoffeeShop?.user?.name}</p>
        </DetailInfo>
        <Categories>
          {data?.seeCoffeeShop?.categories.map((category) => (
            <span>{category.name}</span>
          ))}
        </Categories>
      </Wrapper>
    </Container>
  );
}
export default Details;
