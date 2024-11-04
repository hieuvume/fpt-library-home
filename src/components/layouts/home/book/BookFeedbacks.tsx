import { Feedback } from "@/models/feedback";

export default function BookFeedbacks({
  feedbacks,
}: {
  feedbacks: Feedback[];
}) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <i className="ki-filled ki-message-text text-gray-800" />
          <span className="ms-2">Reviews ({feedbacks?.length})</span>
        </h3>
      </div>
      <div id="notifications_cards">
        {feedbacks?.map((feedback) => (
          <div key={feedback._id} className="card-group py-4 gap-2.5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 shrink-0">
                <img
                  src={feedback.user.avatar_url}
                  alt={feedback.user.full_name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-gray-900">
                    {feedback.user.full_name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(feedback.created_at).toLocaleDateString()}{" "}
                  </span>
                  <span className="text-2sm text-gray-700">
                    {feedback.content}
                  </span>
                </div>
                <div className="justify-center">
                  <span className="text-2sm text-gray-700 flex items-center gap-1">
                    {renderStars(feedback.rating)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`ki-filled ki-star ${
          i <= rating ? "text-yellow-500" : "text-gray-300"
        }`}
        style={{ fontSize: "1rem" }}
      />
    );
  }
  return stars;
}
