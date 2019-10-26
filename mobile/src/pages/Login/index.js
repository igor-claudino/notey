import React, { useState } from "react";
import { AsyncStorage, KeyboardAvoidingView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

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

import { addEmail } from "../../store/actions/NewAccount";

import api from "../../services/api";

import Loader from "../../components/Loader";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleSignIn() {
    if (email === "" || password === "") {
      Alert.alert(
        "Dados inválidos!",
        "Você precisa informar um e-mail e uma senha!",
        null,
        {
          cancelable: true
        }
      );
    } else {
      setLoading(true);
      try {
        const response = await api.post("/sessions", {
          email,
          password
        });
        await AsyncStorage.setItem("userToken", response.data.token);
        setLoading(false);
        navigation.navigate("App");
      } catch (err) {
        setLoading(false);
        Alert.alert("Dados inválidos!", err.response.data.message, null, {
          cancelable: true,
          onDismiss: () => setPassword("")
        });
      }

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    }
  }

  function handleNewAccount() {
    dispatch(addEmail(email));
    navigation.navigate("StepOneNewAccount");
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Logo />
          <KeyboardAvoidingView behavior="padding" enabled>
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
                <TouchableLink onPress={handleNewAccount}>
                  <TouchableLinkText>
                    Ainda não tem uma conta? Crie já!
                  </TouchableLinkText>
                </TouchableLink>
              </FormFooter>
            </Form>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
}
