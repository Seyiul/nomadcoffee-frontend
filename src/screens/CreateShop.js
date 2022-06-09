import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import styled from "styled-components";
import { Btn, FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";
import FormLayout from "../components/Home/FormLayout";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import FormError from "../components/auth/FormError";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(FatLink)`
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
`;

const CREATE_COFFEE_SHOP = gql`
  mutation createCoffeeShop(
    $name: String!
    $latitude: String!
    $longitude: String!
    $file: Upload
    $categories: String
  ) {
    createCoffeeShop(
      name: $name
      latitude: $latitude
      longitude: $longitude
      file: $file
      categories: $categories
    ) {
      id
    }
  }
`;

function CreateShop() {
  const navigate = useNavigate();
  const { register, getValues, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });

  const onCompleted = (data) => {
    const {
      createCoffeeShop: { id },
    } = data;
    if (!id) {
      return;
    }
    console.log(id);
    navigate(routes.home);
  };
  const [createCoffeeShop, { loading }] = useMutation(CREATE_COFFEE_SHOP, {
    onCompleted,
  });

  const onSubmitValid = () => {
    if (loading) {
      return;
    }
    const data = getValues();
    console.log(data);
    createCoffeeShop({
      variables: {
        ...data,
        file: null,
      },
    });
  };
  return (
    <FormLayout>
      <PageTitle title="Create A Shop" />
      <FormBox>
        <HeaderContainer>
          <h1>Nomad Coffee</h1>
          <SubTitle>Register your store.</SubTitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
          />
          <Input
            {...register("latitude", { required: "Latitude is required" })}
            type="text"
            placeholder="Latitude"
          />
          <Input
            {...register("longitude", { required: "Longitude is required" })}
            type="text"
            placeholder="Longitude"
          />
          <Input
            {...register("categories")}
            type="text"
            placeholder="Please enter the category in hashtag form"
          />
          <FormError message={formState.errors?.name?.message} />
          <FormError message={formState.errors?.longitude?.message} />
          <FormError message={formState.errors?.latitude?.message} />
          <Btn type="submit" value="Register" />
        </form>
      </FormBox>
    </FormLayout>
  );
}

export default CreateShop;
