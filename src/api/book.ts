import { BookCreateRequest, BookDetails, BookListResponse } from '@/models/book';
import axios from './axios'; // Ensure this points to your axios instance
import {  FeedbackResponse } from '@/models/feedback';



const bookApi = {
  getBookById: (id: string): Promise<BookCreateRequest> => {
    return axios.get(`books/${id}`)
  },
  getDetailsById:(id: string): Promise<BookDetails[]> => {
    return axios.get(`books/details/${id}`)
  },  
  findFeedbacksByTitleId: (id: string): Promise<FeedbackResponse> => {
    return axios.get(`feebacks/${id}`)
  },

}

const bookDashboardApi = {
  getBooks: (page: number, pageSize: number): Promise<BookListResponse> => {
    return axios.get(`dashboard/books?page=${page}&pageSize=${pageSize}`)
  }
}

export { bookApi, bookDashboardApi }