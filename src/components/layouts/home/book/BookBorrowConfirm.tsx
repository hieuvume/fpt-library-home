import { bookTitleApi } from "@/api/book-title";
import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import useSetting from "@/hooks/useSetting";
import { KTModal } from "@/metronic/core";
import { BookTitle } from "@/models/book-title";
import { formatCurrency } from "@/utils";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import { useState } from "react";

const BookBorrowConfirm = ({ book }: { book: BookTitle }) => {
  const { user } = useAuth();
  const { setting } = useSetting();
  const { current_membership } = user || {};
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onBorrow = () => {
    setLoading(true);
    bookTitleApi
      .borrowBook(book._id)
      .then((res) => {
        Report.success(
          "Borrowed successfully",
          "You have successfully borrowed the book.",
          "OK",
          () => {
            KTModal.closeModal("book-borrow-confirm");
            router.push(`/borrows`);
          }
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <BaseModal modalKey="book-borrow-confirm" title="Confirm Borrow">
      <div className="grid gap-5 mb-2">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-2sm font-medium text-gray-800 p-2">
            <p className="text-gray-700 mb-2 font-semibold">
              Below is some information you need to know before borrowing books.
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Max borrow days:</span>{" "}
              {current_membership?.membership?.max_borrow_days} days
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Late fee:</span> A fee of{" "}
              <span className="font-semibold text-danger">
                {formatCurrency(setting?.overdue_penalty_per_day)}đ
              </span>{" "}
              per day will be charged if you exceed the borrowing period.
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Lost book penalty:</span> If the
              book is lost, you need to pay the full price of the book, which is{" "}
              <span className="font-semibold text-danger">
                {formatCurrency(book.price)}đ
              </span>
            </p>

            {current_membership?.membership?.name === "Premium" ? (
              <p className="text-primary text-xs mb-2">
                As a Premium member, you can reserve this book for up to 24
                hours. Please pick it up within this period to secure your
                reservation.
              </p>
            ) : (
              <p className="text-warning text-xs mb-2">
                You can reserve this book for pickup, but if someone else
                borrows it first, your reservation may not be fulfilled.
              </p>
            )}
            {/* <div>
              <span className="text-red-500">Step 1:</span> Go to the nearest
              agent and provide the librarian with your email and transaction.
            </div>
            <div>
              <span className="text-red-500">Step 2:</span> The agent will
              confirm your payment and provide you with a receipt.
            </div>
            <div>
              <span className="text-red-500">Step 3:</span> Your account will be
              upgraded/extended within 5 minutes.
            </div> */}
          </div>
          <button
            className="btn btn-primary justify-center"
            onClick={onBorrow}
            disabled={loading}
          >
            {loading ? "Borrowing..." : "Borrow"}
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default BookBorrowConfirm;
