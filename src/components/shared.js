import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

export const FatLink = styled.div`
  font-weight: 600;
  color: rgb(142, 142, 142);
`;

export const Btn = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${(props) => props.theme.green};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;
