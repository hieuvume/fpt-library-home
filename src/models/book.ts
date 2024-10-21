import { BookTitle } from "./book-title";

export type Book = {
    _id: string;
    book_title: BookTitle;
    uniqueId: string;
    section: string;
    shelf: string;
    floor: number;
    position: number;
    status: string;
    times_borrowed: number;
    created_at: Date;
    updated_at: Date;
}

export type BookListResponse = {
    books: Book[];
    totalBook: number;
}