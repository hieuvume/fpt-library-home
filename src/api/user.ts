
import { Brrowrd_record, SignInResponse, User, UserProfile } from "@/models/auth";
import api from "./axios";
import { Users } from "@/models/user";

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

export const getUsers = (): Promise<Users[]> => {
    return api.get(`/dashboard/users`)
}

export default userApi