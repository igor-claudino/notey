import * as Font from "expo-font";
import styled from "styled-components/native";
Font.loadAsync({
  Righteous: require("../../../assets/Righteous-Regular.ttf")
});

export const Container = styled.View`
  flex: 1;
  background-color: #9b56bb;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  /* flex: 1; */
  margin: 74px 8px;
`;

export const FormFooter = styled.View`
  align-items: center;
`;

export const BigTitle = styled.Text`
  font-family: "Righteous";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #fff;
  margin: 16px;
`;
