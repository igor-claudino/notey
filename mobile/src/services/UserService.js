import api from "./api";

export async function verifyEmail(email) {
  return await api.get("/users", {
    params: {
      email
    }
  });
}

export async function createAccount(email, name, password) {
  return await api.post("/users", {
    email,
    name,
    password
  });
}
