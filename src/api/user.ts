import {
  Brrowrd_record,
  SignInResponse,
  User,
  UserProfile,
} from "@/models/auth";
import api from "./axios";
import { Users } from "@/models/user";

const userApi = {
  profile: (): Promise<UserProfile> => {
    return api.get("/users/profile");
  },
  histories: (query: string) => {
    return api.get(`/borrow-records/histories?${query}`);
  },
  updateProfile: (data: UserProfile): Promise<UserProfile> => {
    return api.put("/users/profile", data);
  },
};

const dashboardUserApi = {
  getUsers: (): Promise<Users[]> => {
    return api.get(`/dashboard/users`);
  },
};

export { dashboardUserApi, userApi };
