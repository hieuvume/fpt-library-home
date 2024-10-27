import { Category } from "./category";
import { Membership } from "./membership";

export type Feedback = {

}

export type BookTitle = {
    _id: string;
    title: string;
    description: string;
    brief_content: string;
    cover_image: string;
    categories: Category[];
    feedbacks: Feedback[]
    author: string[];
    ISBN: string;
    memberships: Membership[];
    price: number;
    times_borrowed: number;
}

export type BestBookTitleOfTheMonth = {
    _id: string;
    book_title_name: string;
    author: string;
    cover_image: string;
    total_borrows: number;
}