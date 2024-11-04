import { bookTitleApi } from "@/api/book-title";
import { BookTitle } from "@/models/book-title";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookDetail from "./BookDetail";
import BookDetailSidebar from "./BookDetailSidebar";
import BookDetailsModal from "./BookDetailsModal";

const BookDetailWrapper = () => {
  const router = useRouter();
  const bookId = router.query.id as string;

  const { data, isLoading, error } = useSWR<BookTitle>(
    bookId ? `book-titles/details/${bookId}` : null,
    () => bookTitleApi.getDetailsById(bookId)
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="container-fixed">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
          <div className="col-span-2">
            <BookDetail book={data} />
          </div>
          <div className="col-span-1">
            <BookDetailSidebar book={data} />
          </div>
        </div>
      </div>
      <BookDetailsModal book={data} />
    </>
  );
};

export default BookDetailWrapper;
