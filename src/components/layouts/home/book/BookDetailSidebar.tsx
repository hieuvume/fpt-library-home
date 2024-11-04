import useAuth from "@/hooks/useAuth";
import { BookTitle } from "@/models/book-title";
import Link from "next/link";
import { useRouter } from "next/router";

const BookDetailSidebar = ({ book }: { book: BookTitle }) => {
  const router = useRouter();

  const { user, isAuthenticated, redirectToLogin } = useAuth();

  const availableCopies = book?.books.filter(
    (book) => book.status === "available"
  ).length;
  const borrowedCopies = book?.books.filter(
    (book) => book.status === "borrowed"
  ).length;

  const minimumMembership = book?.memberships.reduce((prev, current) => {
    return prev?.price_monthly < current.price_monthly ? prev : current;
  });

  const isIncludeMyMembership = book.memberships.some(
    (membership) => user?.current_membership?.membership?._id === membership._id
  );

  const isCanBorrow =
    isAuthenticated && availableCopies > 0 && isIncludeMyMembership;

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-7.5">
        <div className="card">
          <div className="card-body flex flex-col">
            <table className="table-auto mb-1">
              <tbody>
                <tr>
                  <td className="text-sm text-gray-600 pb-3 pe-4 lg:pe-10">
                    Total Copies
                  </td>
                  <td className="text-sm ext-gray-900 pb-3">
                    <span
                      className="cursor-pointer text-primary"
                      data-modal-toggle="#book-details-modal"
                    >
                      {book.books.length} copies
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-sm text-gray-600 pb-3 pe-4 lg:pe-10">
                    Available
                  </td>
                  <td className="text-sm text-gray-900 pb-3">
                    {availableCopies}
                  </td>
                </tr>
                <tr>
                  <td className="text-sm text-gray-600 pb-3 pe-4 lg:pe-10">
                    Borrowed
                  </td>
                  <td className="text-sm text-danger pb-3">{borrowedCopies}</td>
                </tr>
                <tr>
                  <td className="text-sm text-gray-600 pb-3 pe-4 lg:pe-10">
                    Minimum Plan
                  </td>
                  <td className="text-sm ext-gray-900 pb-3">
                    <span
                      className={`badge badge-sm badge-${minimumMembership?.color} badge-outline`}
                    >
                      {minimumMembership?.name}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-sm text-gray-600 pb-3 pe-4 lg:pe-10">
                    Max borrow days
                  </td>
                  <td className="text-sm ext-gray-900 pb-3">
                    {user?.current_membership?.membership?.max_borrow_days ||
                      "7"}{" "}
                    days
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex flex-col gap-1.5 mb-5">
              <p className="text-2sm text-gray-700">
                Before borrowing, please check each book copy’s location
                (section, shelf, floor) before borrowing
              </p>
              <div>
                <button
                  className="btn btn-link btn-sm flex-none"
                  data-modal-toggle="#book-details-modal"
                >
                  View Copies
                </button>
              </div>
            </div>

            <div>
              {!isAuthenticated ? (
                <button
                  onClick={redirectToLogin}
                  className="btn btn-secondary btn-sm"
                >
                  Login to Borrow
                </button>
              ) : (
                <>
                  {!isIncludeMyMembership && (
                    <Link
                      href={"/plans"}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Upgrade Plan to Borrow
                    </Link>
                  )}
                  {isIncludeMyMembership && (
                    <button
                      className={`btn btn-secondary btn-sm ${
                        !isCanBorrow ? "disabled" : ""
                      }`}
                      disabled={!isCanBorrow}
                      data-modal-toggle="#book-borrow-confirm"
                    >
                      Borrow
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailSidebar;
