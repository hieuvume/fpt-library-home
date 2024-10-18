import { SignInResponse } from "@/models/auth";
import { Setting } from "@/models/setting";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = `${API_URL}/auth`;

export const signIn = (data: any): Promise<SignInResponse> => {
  return axios.post(`${AUTH_URL}/sign-in`, data);
};

export const signUp = (data: any): Promise<SignInResponse> => {
  return axios.post(`${AUTH_URL}/sign-up`, data);
};
