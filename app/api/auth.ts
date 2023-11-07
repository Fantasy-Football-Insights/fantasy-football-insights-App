import axios from "axios";

const API_URL = "http://127.0.0.1:3000/api/v1";

export const login = async (email: string, password: string) => {
  const result = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return result.data;
};

export const register = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  const result = await axios.post(`${API_URL}/register`, {
    email,
    firstName,
    lastName,
    password,
  });
  return result.data;
};
