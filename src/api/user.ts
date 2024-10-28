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
        return api.get("/users/profile");
    },
    histories: (query: string) => {
        return api.get(`/borrow-records/histories?${query}`);
    },
    updateProfile: (data: any) => {
        return api.put("/users/profile", data);
    },
    updateAvatar: (avatar_url: string) => {
        return api.put("/users/profile/avatar", { avatar_url });
    },
    getCurrentLoans: (): Promise<BorrowRecord[]> => {
        return api.get("/borrow-records/current-loans");
    },
    updatePassword: (data: ChangePasswordPayload) => {
        return api.put("/users/profile/password", data);
    },
}

const dashboardUserApi = {
    getUsers: (): Promise<Users[]> => {
        return api.get(`/dashboard/users`)
    },
    banUsers: (updateUser: Users): Promise<Users> => {
        return api.put(`/dashboard/users/${updateUser.id}`, updateUser)
    },

}

export { dashboardUserApi, userApi };