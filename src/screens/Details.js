import { gql, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUser from "../hooks/useUser";
import { useMutation } from "@apollo/client/react";
import routes from "../routes";

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
  width: 50%;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  margin-top: 10px;
  background-color: tomato;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

const SEE_COFFEESHOP = gql`
  query seeCoffeeShop($id: Int!) {
    seeCoffeeShop(id: $id) {
      id
      name
      latitude
      longitude
      user {
        id
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

const DELETE_COFFEESHOP = gql`
  mutation deleteCoffeeShop($id: Int!) {
    deleteCoffeeShop(id: $id) {
      ok
      error
    }
  }
`;

function Details() {
  const location = useLocation();
  const loggedInUser = useUser();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(SEE_COFFEESHOP, {
    variables: { id: location?.state?.id },
  });

  const [deleteCoffeeShop] = useMutation(DELETE_COFFEESHOP);

  const deleteShop = () => {
    const ShopId = data?.seeCoffeeShop?.id;
    deleteCoffeeShop({ variables: { id: ShopId } });
    navigate(routes.home);
  };

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
        {loggedInUser?.data?.me?.id === data?.seeCoffeeShop?.user?.id ? (
          <ButtonWrapper>
            <Btn onClick={deleteShop}>Delete</Btn>
          </ButtonWrapper>
        ) : null}
      </Wrapper>
    </Container>
  );
}
export default Details;
