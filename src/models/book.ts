import { BookTitle } from "./book-title";

export type Book = {
    _id: string;
    id: string;
    book_title: BookTitle;
    uniqueId: string;
    section: string;
    shelf: string;
    floor: number;
    position: number;
    status: string;
    times_borrowed: number;
    created_at: string;
    updated_at: string;
}

export type Category = {
    _id: string;    
    title: string; 
    description: string; 
};

export type BookCreateRequest = {
    book_title: {
        title: string;
        description: string;
        brief_content?: string;
        cover_image?: string;
        categories: Category[]; 
        author: string[];
        ISBN: string;
        memberships?: string[];
        price: number;
    };
    uniqueId: string;
    section: string;
    shelf: string;
    floor: number;
    position: number;
};
interface BookCopy {
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
export type BookDetails = {
    title: string;
    description: string;
    author: string[];
    ISBN: string;
    price: number;
    cover_image: string;
    categories: Category[];
    copies: BookCopy[];
    availableCount: number;
    totalCount: number;
    borrowedCount: number;
}
export interface BookListResponse  {
    books: Book[];
    totalBook: number;
}