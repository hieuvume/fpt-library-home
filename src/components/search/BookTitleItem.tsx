import { Book } from "@/models/book";
import { BookTitle } from "@/models/book-title";
import Image from "next/image";
import Link from "next/link";

const BookTitleItem = ({ bookTitle }: { bookTitle: BookTitle }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex items-center gap-5 shrink-0">
          <Image
            width={120}
            height={120}
            alt="H"
            className="rounded-lg max-h-[120px] max-w-full"
            src={bookTitle?.cover_image}
          />
        </div>
        <div className="flex flex-col">
          <a
            className="text-base font-medium hover:text-primary text-gray-900 leading-4"
            href="#"
          >
            {bookTitle?.title}
          </a>
          <div className="mb-1">
            {bookTitle.author.map((author, index) => (
              <Link key={index} href={"/search?keyword=" + author} className="text-2sm font-medium text-brand leading-[14px] hover:text-primary-active mb-px me-2">
                {author}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-800 leading-[22px]">
            {bookTitle.brief_content}
          </p>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <i className="ki-filled ki-heart text-base text-gray-500"></i>
              <span className="text-2sm text-gray-800 py-2">{bookTitle.times_borrowed}</span>
            </div>
            <div className="flex gap-1 items-center">
              <i className="ki-filled ki-messages text-base text-gray-500"></i>
              <span className="text-2sm text-gray-800 py-2">{bookTitle.feedbacks.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="[&:not(:last-child)]:border-b border-b-gray-200"></div>
    </>
  );
};

export default BookTitleItem;
