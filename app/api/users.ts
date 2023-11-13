import axios from "axios";
import { API_URL } from "../../config/baseurl";

export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

// get user profile
export const getUser = async () => {
  const result = await axios.get<UserModel>(`${API_URL}/users/me`);
  return result.data;
};

// delete user account
export const deleteUser = async () => {
  const result = await axios.delete<UserModel>(`${API_URL}/users/delete`);
  return result.data;
};
