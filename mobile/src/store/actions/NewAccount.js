export const addEmail = email => {
  return {
    type: "ADD_EMAIL",
    email
  };
};
export const verifyEmailRequest = email => {
  return {
    type: "VERIFY_EMAIL_REQUEST",
    email
  };
};
export const emailAccepted = () => {
  return {
    type: "EMAIL_ACCEPTED"
  };
};
export const emailFailed = errorMessage => {
  return {
    type: "EMAIL_FAILED",
    errorMessage
  };
};

export const createAccountRequest = (email, password, name) => {
  return {
    type: "CREATE_ACCOUNT_REQUEST",
    email,
    password,
    name
  };
};

export const createAccountSuccess = () => {
  return {
    type: "CREATE_ACCOUNT_SUCCESS"
  };
};

export const createAccountFailed = errorMessage => {
  return {
    type: "CREATE_ACCOUNT_FAILED",
    errorMessage
  };
};
