import { BorrowRecord } from "@/models/borrow-record";
import api from "./axios";
import { Book } from "@/models/book";

const borrowRecordApi = {
  histories: (query: string) => {
    return api.get(`/borrow-records/histories?${query}`);
  },
  cancelBorrow: (id: string) => {
    return api.put(`/borrow-records/${id}/cancel`);
  },
};

const borrowRecordDashboardApi = {
  getCurrentLoans: (query: string) => {
    return api.get(`/borrow-records-dashboard/current-loans?${query}`);
  },
  statusStatistics: (): Promise<any[]> => {
    return api.get(`/borrow-records-dashboard/status-statistics`);
  },
  getDetailLoan: (id: string): Promise<BorrowRecord> => {
    return api.get(`/borrow-records-dashboard/details/${id}`);
  },
  getBookLoans: (id: string): Promise<Book[]> => {
    return api.get(`/borrow-records-dashboard/book-loans/${id}`);
  },
  approveBorrow: (id: string, data: any) => {
    return api.put(`/borrow-records-dashboard/approve/${id}`, data);
  },
  rejectBorrow: (id: string, note: string) => {
    return api.put(`/borrow-records-dashboard/reject/${id}`, { note });
  },
  returnedBook: (id: string, after_status: string) => {
    return api.put(`/borrow-records-dashboard/returned/${id}`, {
      after_status,
    });
  },
  lostedBook: (id: string, penalty_total: string) => {
    return api.put(`/borrow-records-dashboard/losted/${id}`, { penalty_total });
  },
};

export { borrowRecordApi, borrowRecordDashboardApi };
