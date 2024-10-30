
import { Book } from "./book";
import { BookTitle } from "./book-title";


export type User = {
  _id: string
  username: string;
  password: string;
  email: string;
  full_name: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
  avatar_url: string

}
export type BorrowRecord = {
  _id: string;
  user: User;
  book: Book;
  book_title: BookTitle;
  before_status: string;
  after_status: string;
  borrow_date: Date;
  due_date: Date;
  return_date: Date;
  is_returned: boolean;
  penatly_total: number;
};
