import commentApi from "@/api/feedback";
import { useState } from "react";
import { Notify, Report } from 'notiflix'

export default function CommentSection(children) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  //console.log(children.children[0].book_title)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        content: comment,
        rating: rating,
        book_title_id: children.children[0].book_title, 
      };
     await commentApi.comment(data).then((data) => {
        Notify.success("Comment successfully!");
        location.reload()
        });
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-4 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-700 dark:text-gray-300 mr-3">Rating:</span>
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`cursor-pointer text-lg ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                } ki-solid ki-star`}
                onClick={() => handleStarClick(index)}
              >
              </i>
            ))}
          </div>

          {/* Nút gửi bình luận */}
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Post comment
          </button>
        </form>
      </div>
    </section>
  );
}
