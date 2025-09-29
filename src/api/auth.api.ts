import axiosClient from "../api/axiosClient";

export const loginRequest = async (phone: object, password: string) => {
  const { data } = await axiosClient.post("/login", { phone, password });
  return data;
};
