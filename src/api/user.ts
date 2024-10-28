import {
  Brrowrd_record,
  SignInResponse,
  User,
  UserProfile,
} from "@/models/auth";
import api from "./axios";
import { ChangePasswordPayload, Users } from "@/models/user";
import { BorrowRecord } from "@/models/borrow-record";

const userApi = {
    profile: (): Promise<UserProfile> => {
        return api.get('/users/profile')
    },
    histories: (page: number = 1, limit: number = 5): Promise<{ data: Brrowrd_record[], totalPages: number, currentPage: number }> => {
        return api.get(`/borrow-records/histories?page=${page}&limit=${limit}`);
    },
    updateProfile: (data: UserProfile): Promise<UserProfile> => {
        return api.put('/users/profile', data)
    },

}

const dashboardUserApi = {
    getUsers: (): Promise<Users[]> => {
        return api.get(`/dashboard/users`)
    },
    banUsers: (updateUser: Users): Promise<Users> => {
        return api.put(`/dashboard/users/${updateUser.id}`,updateUser)
    },

}

export { dashboardUserApi, userApi };