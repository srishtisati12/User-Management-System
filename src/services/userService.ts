import axios from "axios";
import type { User } from "../types/User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (
  user: Omit<User, "id">
): Promise<User> => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (
  id: number,
  user: Omit<User, "id">
): Promise<User> => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};