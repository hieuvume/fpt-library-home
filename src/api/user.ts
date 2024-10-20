import { SignInResponse, User, UserProfile } from "@/models/auth";
import api from "./axios";

const userApi = {
    profile :():Promise<UserProfile> => {
        return api.get('/users/profile')
    }

}

export default userApi