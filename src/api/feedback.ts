import api from "./axios";

const commentApi = {
    comment: (data: { content: string; rating: number; book_title_id: string }): Promise<any> => {
        return api.post('/feebacks/comment', data);
    },
};

export default commentApi;
