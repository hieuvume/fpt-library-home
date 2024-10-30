import { BookCreateRequest, BookDetails, BookListResponse } from '@/models/book';
import axios from './axios';
import { FeedbackResponse } from '@/models/feedback';

const bookApi = {
  getBookById: (id: string): Promise<BookCreateRequest> => {
    return axios.get(`books/${id}`);
  },
  getDetailsById: (id: string): Promise<BookDetails[]> => {
    return axios.get(`books/details/${id}`);
  },
  findFeedbacksByTitleId: (id: string): Promise<FeedbackResponse> => {
    return axios.get(`feedbacks/${id}`);
  },
};

const dashboardBookApi = {
  getBooks: (query: string): Promise<BookListResponse> => {
    return axios.get(`/dashboard/books?${query}`);
  },
  createBook: (bookData: BookCreateRequest): Promise<BookCreateRequest> => {
    return axios.post('dashboard/books', bookData);
  },
  getBookById: (id: string): Promise<BookCreateRequest> => {
    return axios.get(`dashboard/books/${id}`);
  },
  updateBook: (id: string, bookData: BookCreateRequest): Promise<BookCreateRequest> => {
    return axios.put(`dashboard/books/${id}`, bookData);
  },
  deleteBook: (id: string): Promise<void> => {
    return axios.delete(`dashboard/books/${id}`);
  },
};

export { bookApi, dashboardBookApi };
