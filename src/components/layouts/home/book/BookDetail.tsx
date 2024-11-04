import { BookTitle } from "@/models/book-title";
import { formatCurrency } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const BookDetail = ({ book }: { book: BookTitle }) => {
  return (
    <>
      <div className="card">
        <div className="card-body lg:py-7.5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex items-center gap-5 shrink-0">
              <Image
                width={200}
                height={300}
                alt="H"
                className="rounded-lg max-h-[300px] max-w-full"
                src={book?.cover_image}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-medium hover:text-primary text-gray-900 leading-4">
                {book?.title}
              </div>
              <p className="text-2sm text-gray-800 leading-[22px] mb-4">
                {book.description}
              </p>

              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
                <label className="form-label max-w-48 text-gray-800 fw-semibold">
                  ISBN
                </label>
                <div className="flex items-center gap-7.5 grow">
                  <span className="form-info text-gray-800 font-normal">
                    {book?.ISBN}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
                <label className="form-label max-w-48 text-gray-800 fw-semibold">
                  Author
                </label>
                <div className="">
                  {book.author.map((author, index) => (
                    <Link
                      key={index}
                      href={"/search?keyword=" + author}
                      className="badge badge-xs badge-outline badge-primary me-2"
                    >
                      {author}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
                <label className="form-label max-w-48 text-gray-800 fw-semibold">
                  Category
                </label>
                <div className="">
                  {book.categories.map((category, index) => (
                    <Link
                      key={index}
                      href={"/search?keyword=" + category.title}
                      className="badge badge-xs badge-outline badge-secondary me-2"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
                <label className="form-label max-w-48 text-gray-800 fw-semibold">
                  Price
                </label>
                <div className="flex items-center gap-7.5 grow">
                  <span className="form-info text-gray-800 font-normal">
                    {formatCurrency(book?.price)} đ
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-auto">
                <div className="flex gap-1 items-center">
                  <i className="ki-filled ki-heart text-base text-danger"></i>
                  <span className="text-2sm text-gray-800 py-2">
                    {book.times_borrowed} borrowed
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <i className="ki-filled ki-messages text-base text-primary"></i>
                  <span className="text-2sm text-gray-800 py-2">
                    {book.feedbacks.length}{" "}
                    {book.feedbacks.length > 1 ? "reviews" : "review"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
