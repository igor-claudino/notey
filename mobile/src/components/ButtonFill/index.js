import styled from "styled-components/native";

export const ButtonFill = styled.TouchableOpacity`
  width: 163px;
  height: 42px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  
  /* justify-self: stretch; */

  margin-top: 34px;

  /* White */

  background: #9b56bb;
  /* Primary */

  border: 2px solid #fff;
  border-radius: 4px;
`;

export const ButtonFillText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  color: #fff;
`;
