import BookDetailWrapper from "@/components/layouts/home/book/BookDetailWrapper";
import { useRouter } from "next/router";

const BookDetailPage = () => {
  const router = useRouter();
  const bookId = router.query.id as string;

  if (!bookId) return null;

  return (
    <>
      <BookDetailWrapper />
    </>
  );
};

export default BookDetailPage;
