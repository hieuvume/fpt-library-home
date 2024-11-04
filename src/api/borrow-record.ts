import api from "./axios";

const borrowRecordApi = {
  histories: (query: string) => {
    return api.get(`/borrow-records/histories?${query}`);
  },
  cancelBorrow: (id: string) => {
    return api.put(`/borrow-records/${id}/cancel`);
  },
};

const borrowRecordDashboardApi = {};

export { borrowRecordApi, borrowRecordDashboardApi };
