import axios from "axios";

export const registerUser = (email: String, name: String, password: String) =>
  axios.post("/api/register", {
    email,
    name,
    password,
  });
