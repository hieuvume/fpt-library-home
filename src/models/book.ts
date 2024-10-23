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

export type BookListResponse = {
    books: Book[];
    totalBook: number;
}