import { BookCreateRequest, BookDetails, BookListResponse } from '@/models/book';
import axios from './axios'; // Ensure this points to your axios instance
import {  FeedbackResponse } from '@/models/feedback';
import { date } from 'yup';
import { BorrowRecord } from '@/models/borrow-record';



const bookApi = {
  getBookById: (id: string): Promise<BookCreateRequest> => {
    return axios.get(`books/${id}`);
  },
  getDetailsById: (id: string): Promise<BookDetails[]> => {
    return axios.get(`books/details/${id}`);
  },
  findFeedbacksByTitleId: (id: string): Promise<FeedbackResponse> => {
    return axios.get(`feebacks/${id}`);
  },
  getEarLiestFreeTime: (id: string): Promise<any> => {
    return axios.get(`books/${id}/availability-info`)
  },
  borrowBook: (data): Promise<any> => {
    return axios.post(`books/borrow`,data)
  }
}

const bookDashboardApi = {
  getBooks: (page: number, pageSize: number): Promise<BookListResponse> => {
    return axios.get(`dashboard/books?page=${page}&pageSize=${pageSize}`)
  },
  getCurrentLoans:(query: string) => {
    return axios.get(`/borrow-records-dashboard/current-loans?${query}`);
  },
  getDetailLoan: (id: string): Promise<BorrowRecord> => {
    return axios.get(`/borrow-records-dashboard/details/${id}`);
  },
  approvedBook:(data)=>{
    return axios.put(`/borrow-records-dashboard/update-status`,data)
  }
}

export { bookApi, bookDashboardApi };
