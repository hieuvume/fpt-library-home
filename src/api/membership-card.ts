import { Membership } from "@/models/membership";
import api from "./axios";
import { get } from "http";
import { u } from "framer-motion/client";
const dashboardmembershipApi = {
    getMemberships: (query: string) : Promise<Membership[]>=> {
      return api.get(`/membership-dashboard/list?${query}`);
    },
    getMembershipById: (id: string) : Promise<Membership> => {
      return api.get(`/membership-dashboard/${id}`);
    },
    updateMembershipById: (id: string, data: any) : Promise<Membership> => {
      return api.put(`/membership-dashboard/${id}`, data);
    },
    statistics: (): Promise<any> => {
      return api.get(`/membership-card-dashboard/statistics`);
    },
    getAll:():Promise<Membership[]>=>{
      return api.get(`/membership-dashboard/get-all`);
    }
  }
export { dashboardmembershipApi };