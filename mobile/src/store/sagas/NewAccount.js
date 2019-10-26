import { put, call } from "redux-saga/effects";
import {
  emailAccepted,
  emailFailed,
  createAccountFailed,
  createAccountSuccess
} from "../actions/NewAccount";
import { verifyEmail, createAccount } from "../../services/UserService";
import { Alert, AsyncStorage } from "react-native";
import * as NavigationService from "../../services/navigation/NavigationService";

export function* requestVerifyEmail(action) {
  try {
    const response = yield call(verifyEmail, action.email);
    if (response.status === 204) {
      yield put(emailAccepted());
      NavigationService.navigate("StepTwoNewAccount");
    }
  } catch (err) {
    if (err.response.status === 409) {
      yield put(emailFailed(err.response.data.message));
      Alert.alert("E-mail em uso!", err.response.data.message, null, {
        cancelable: true
      });
    }
  }
}

export function* requestCreateAccount(action) {
  try {
    const response = yield call(
      createAccount,
      action.email,
      action.name,
      action.password
    );
    if (response.status === 201) {
      yield AsyncStorage.setItem("userToken", response.data.token);
      yield put(createAccountSuccess());
      NavigationService.navigate("App");
    }
  } catch (err) {
    yield put(createAccountFailed(err.response.data.message));
    Alert.alert("Ocorreu um erro!", err.response.data.message, null, {
      cancelable: true
    });
  }
}
