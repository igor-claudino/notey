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

import { Container, Form, FormFooter, BigTitle } from "./styles";

import Loader from "../../components/Loader";

import { verifyEmailRequest } from "../../store/actions/NewAccount";

export default function StepOneNewAccount({ navigation }) {
  const [email, setEmail] = useState("");

  const newEmail = useSelector(state => state.newAccount.email);
  const loading = useSelector(state => state.newAccount.loading);

  const dispatch = useDispatch();

  useEffect(() => setEmail(newEmail), [newEmail]);

  async function handleNext() {
    if (email === "") {
      Alert.alert("Dados inválidos!", "Você precisa informar um e-mail", null, {
        cancelable: true
      });
    } else {
      dispatch(verifyEmailRequest(email));
    }
  }

  function handleBack() {
    navigation.navigate("Login");
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
              <Label>E-mail</Label>
              <TextField
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <FormFooter>
                <ButtonFill onPress={handleNext} style={{ width: 328 }}>
                  <ButtonFillText>PRÓXIMO</ButtonFillText>
                </ButtonFill>
                <ButtonOutline onPress={handleBack} style={{ width: 328 }}>
                  <ButtonOutlineText>VOLTAR</ButtonOutlineText>
                </ButtonOutline>
              </FormFooter>
            </Form>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
}
