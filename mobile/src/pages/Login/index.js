import React, { useState } from "react";
import { AsyncStorage } from "react-native";

import { Label } from "../../components/Label";
import { TextField } from "../../components/TextField";
import {
  ButtonOutline,
  ButtonOutlineText
} from "../../components/ButtonOutline";

import {
  TouchableLink,
  TouchableLinkText
} from "../../components/TouchableLink";

import { Container, Logo, Form, FormFooter } from "./styles";

import api from "../../services/api";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const response = await api.post("/sessions", {
      email,
      password
    });

    await AsyncStorage.setItem("userToken", response.data.token);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate("App");
  }

  return (
    <Container>
      <Logo />
      <Form>
        <Label>E-mail</Label>
        <TextField
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Label>Senha</Label>
        <TextField
          placeholder="Digite sua senha"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <FormFooter>
          <ButtonOutline onPress={handleSignIn}>
            <ButtonOutlineText>ENTRAR</ButtonOutlineText>
          </ButtonOutline>
          <TouchableLink onPress={() => {}}>
            <TouchableLinkText>
              Ainda não tem uma conta? Crie já!
            </TouchableLinkText>
          </TouchableLink>
        </FormFooter>
      </Form>
    </Container>
  );
}
