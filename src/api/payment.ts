import { Payment } from "@/models/payment";
import api from "./axios";
import { promises } from "dns";

const paymentApi = {
    histories: (query: string) => {
        return api.get(`/payments/histories?${query}`);
    },
    getPayment: (id: string): Promise<Payment> => {
        return api.get(`/payments/${id}`);
    },
    cancelPayment: (id: string) => {
        return api.put(`/payments/${id}/cancel`);
    }
}

const dashboardPaymentApi = {
    getAll: (query: string) => {
        return api.get(`/dashboard/payments?${query}`);
    },
    getPayment: (id: string): Promise<Payment> => {
        return api.get(`/dashboard/payments/${id}`);
    },
    approvePayment: (id: string) => {
        return api.put(`/dashboard/payments/${id}/approve`);
    },
    rejectPayment: (id: string) => {
        return api.put(`/dashboard/payments/${id}/reject`);
    },
    rollbackPayment: (id: string) => {
        return api.put(`/dashboard/payments/${id}/rollback`);
    },
    deletePayment: (id: string) => {
        return api.delete(`/dashboard/payments/${id}`);
    },
    monthlyStatistics:():Promise<any[]>=>{
        return api.get(`/dashboard/payments/monthly-statistics`)
    },
}

export { dashboardPaymentApi, paymentApi };
