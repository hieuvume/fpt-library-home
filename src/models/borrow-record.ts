import { IDCard, User } from "./auth";
import { Book } from "./book";
import { BookTitle } from "./book-title";
import { MembershipCard } from "./membership";

export type BorrowRecord = {
  _id: string;
  user: User;
  book: Book;
  book_title: BookTitle;
  before_status: string;
  after_status: string;
  borrow_date: string;
  due_date: string;
  return_date: string;
  is_returned: boolean;
  penatly_total: number;
  status: string
};