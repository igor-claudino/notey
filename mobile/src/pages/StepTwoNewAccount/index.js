import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Label } from "../../components/Label";
import { TextField } from "../../components/TextField";
import {
  ButtonOutline,
  ButtonOutlineText
} from "../../components/ButtonOutline";

import { ButtonFill, ButtonFillText } from "../../components/ButtonFill";

import Loader from "../../components/Loader";

import { Container, Form, FormFooter, BigTitle } from "./styles";

import { createAccountRequest } from "../../store/actions/NewAccount";

export default function StepTwoNewAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const loading = useSelector(state => state.newAccount.loading);

  const newEmail = useSelector(state => state.newAccount.email);

  const dispatch = useDispatch();

  useEffect(() => setEmail(newEmail), []);

  async function handleCreateAccount() {
    if (
      email === "" ||
      name === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Alert.alert(
        "Dados inválidos!",
        "Você precisa preencher todos os campos",
        null,
        {
          cancelable: true
        }
      );
    } else if (password !== confirmPassword) {
      Alert.alert("Dados inválidos!", "As senhas não correspondem", null, {
        cancelable: true
      });
      setConfirmPassword("");
      setPassword("");
    } else {
      dispatch(createAccountRequest(email, password, name));
    }
  }

  function handleBack() {
    navigation.navigate("StepOneNewAccount");
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <BigTitle>Nova conta</BigTitle>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Form>
              <Label>Nome</Label>
              <TextField
                placeholder="Como podemos te chamar?"
                keyboardType="default"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
              <Label>Senha</Label>
              <TextField
                placeholder="Digite sua senha"
                secureTextEntry={true}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
              <Label>Confirmação de senha</Label>
              <TextField
                placeholder="Digite sua senha"
                secureTextEntry={true}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <FormFooter>
                <ButtonFill
                  onPress={handleCreateAccount}
                  style={{ width: 328 }}
                >
                  <ButtonFillText>FINALIZAR</ButtonFillText>
                </ButtonFill>
                <ButtonOutline onPress={handleBack} style={{ width: 328 }}>
                  <ButtonOutlineText>ALTERAR MEU E-MAIL</ButtonOutlineText>
                </ButtonOutline>
              </FormFooter>
            </Form>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
}
