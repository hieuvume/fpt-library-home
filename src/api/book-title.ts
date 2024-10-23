import { BestBookTitleOfTheMonth, BookTitle } from "@/models/book-title";
import axios from "./axios";
import { PaginationResponse } from "@/models/pagination";

const bookTitleApi = {
  getBestOfTheMonth: (subMonth: number): Promise<BestBookTitleOfTheMonth[]> => {
    return axios.get(`book-titles/best-of-the-month?subMonth=${subMonth}`);
  },
  search: (query: string): Promise<PaginationResponse<BookTitle>> => {
    return axios.get(`book-titles/search?${query}`);
  },
};

const bookTitleDashboardApi = {};

export { bookTitleApi, bookTitleDashboardApi };
