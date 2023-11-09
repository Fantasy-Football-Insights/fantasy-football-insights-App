import axios from "axios";
import { API_URL } from "../../config/baseurl";

// login user
export const login = async (email: string, password: string) => {
  const result = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return result.data;
};

// register user
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
