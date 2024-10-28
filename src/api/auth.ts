import { SignInResponse, User } from "@/models/auth";
import api from "./axios";

const authApi = {
  signIn: (data): Promise<SignInResponse> => {
    return api.post('/auth/sign-in', data)
  },
  signUp: (data): Promise<SignInResponse> => {
    return api.post('/auth/sign-up', data)
  },
  logout: () => {
    return api.post('/auth/logout')
  },
  me: (): Promise<User> => {
    return api.get('/auth/me')
  },

}

export default authApi