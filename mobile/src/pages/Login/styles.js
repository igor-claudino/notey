import styled from "styled-components/native";
import logo from "../../../assets/logo.png";

export const Container = styled.View`
  flex: 1;
  background-color: #9b56bb;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: "contain"
})`
  width: 463px;
  height: 191px;
`;

export const Form = styled.View`
  /* flex: 1; */
  margin-top: 10px;
`;

export const FormFooter = styled.View`
  align-items: center;
`;
