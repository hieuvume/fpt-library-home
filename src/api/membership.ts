import { Membership } from "@/models/membership";
import api from "./axios";

const membershipApi = {
    getMemberships: (): Promise<Membership[]> => {
        return api.get('/membership')
    },
}

export default membershipApi