import { Membership } from "@/models/membership";
import api from "./axios";
import { Payment } from "@/models/payment";

const dashboardApi = {
  getAdminDashboard: (): Promise<{
    totalBooks: number;
    totalUsers: number;
    borrowedBooks: number;
    availableBooks: number;
  }> => {
    return api.get("/dashboard/stats/admin");
  },
  getLibrarianDashboard: (): Promise<{
    borrowedBooks: number;
    overdueBooks: number;
    waitingBooks: number;
    totalReturnedBooks: number;
    newBooks: number;
    newUsers: number;
    totalBorrowRecords: number;
    returnedBooksThisMonth: number;
    overdueRate: number;
  }> => {
    return api.get("/dashboard/stats/librarian");
  },
};

export default dashboardApi;
