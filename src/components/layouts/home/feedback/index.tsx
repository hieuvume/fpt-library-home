import CardPagination from "@/components/pagination/CardPagination";
import { Feedback } from "@/models/feedback";
import CommentSection from "../comment";

export default function FeedbackDetails({ children }: { children: Feedback[] }) {
  return (

    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Feedback</h3>
      </div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-1 antialiased">
        <div className="">
          <CommentSection  children={children}/>
          <div id="notifications_cards">
            {children?.map((feedback) => (
              <div key={feedback._id} className="card-group flex items-center justify-between py-1 gap-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <div className="relative w-12 h-12 shrink-0">
                    <img
                      src={feedback.user.avatar_url}
                      alt={feedback.user.full_name}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {feedback.user.full_name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(feedback.created_at).toLocaleDateString()}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">{feedback.content}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-700 dark:text-gray-300">Rating:</span>
                      {renderStars(feedback.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`text-base leading-none ${i <= rating ? 'rating-on ki-solid ki-star text-yellow-500' : 'rating-off ki-solid ki-star text-gray-300'
          }`}
        style={{ fontSize: '1rem' }}
      />
    );
  }
  return stars;
}

