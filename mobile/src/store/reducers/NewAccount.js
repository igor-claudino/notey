const initialState = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
  errorMessage: "",
  loading: false
};

const newAccount = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMAIL":
      return { ...state, email: action.email };
    case "VERIFY_EMAIL_REQUEST":
      return { ...state, email: action.email, loading: true };
    case "EMAIL_ACCEPTED":
      return { ...state, loading: false };
    case "EMAIL_FAILED":
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
        email: ""
      };
    case "CREATE_ACCOUNT_REQUEST":
      return {
        ...state,
        email: action.email,
        name: action.name,
        password: action.password,
        loading: true
      };
    case "CREATE_ACCOUNT_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_ACCOUNT_FAILED":
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false
      };
    default:
      return state;
  }
};

export default newAccount;
