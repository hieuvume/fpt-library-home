export type User = {
    _id: string;
    full_name: string;
    avatar_url: string;
  };
  
  export type Feedback = {
    _id: string;
    user: User;
    book_title: string;
    content: string;
    rating: number;
    created_at: string;
    updated_at: string;
    __v: number;
  };
  
  export type FeedbackDoc = {
    feedbacks: Feedback[];
  };
  
  export type FeedbackResponse = {
    docs: FeedbackDoc[]; // Ensure this matches the JSON structure
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
  