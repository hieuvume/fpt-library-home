import { Membership } from "@/models/membership";
import api from "./axios";
import { Payment } from "@/models/payment";

const membershipApi = {
  getMemberships: (): Promise<Membership[]> => {
    return api.get("/membership");
  },
  downgradePlan: (membershipId: string) => {
    return api.post(`/membership-card/downgrade`, {
      membershipId,
    });
  },
  upgradePlan: (membershipId: string, months: number, payment_method: string): Promise<Payment> => {
    return api.post(`/membership-card/upgrade`, {
      membershipId,
      months,
      payment_method,
    });
  }
};

export default membershipApi;
