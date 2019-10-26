import { takeLatest, all } from "redux-saga/effects";

import { requestVerifyEmail, requestCreateAccount } from "./NewAccount";

export default function* root() {
  yield all([
    takeLatest("VERIFY_EMAIL_REQUEST", requestVerifyEmail),
    takeLatest("CREATE_ACCOUNT_REQUEST", requestCreateAccount)
  ]);
}
