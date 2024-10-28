import { Membership } from "@/models/membership";
import api from "./axios";

const membershipApi = {
  getMemberships: (): Promise<Membership[]> => {
    return api.get("/membership");
  },
  downgradePlan: (membershipId: string) => {
    return api.post(`/membership-card/downgrade`, {
      membershipId,
    });
  },
};

export default membershipApi;
