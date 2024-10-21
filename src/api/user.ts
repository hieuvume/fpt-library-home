import { Brrowrd_record, SignInResponse, User, UserProfile } from "@/models/auth";
import api from "./axios";

const userApi = {
    profile :():Promise<UserProfile> => {
        return api.get('/users/profile')
    },
    histories :():Promise<Brrowrd_record> => {
        return api.get('/borrow-records/histories')
    }
}

export default userApi