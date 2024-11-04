import { borrowRecordApi } from "@/api/borrow-record";
import { BaseModal } from "@/components/modal/BaseModal";
import { KTModal } from "@/metronic/core";
import { BorrowRecord } from "@/models/borrow-record";
import { useObjectData } from "@/provider/ObjectDataProvider";
import { useTableQuery } from "@/provider/TableQueryProvider";
import { Confirm, Report } from "notiflix";

const BorrowGuideModal = () => {
  const { data } = useObjectData<BorrowRecord>();
  const { refresh } = useTableQuery();

  const availableCopies = data?.book_title?.books?.filter(
    (book) => book.status === "available"
  );

  const onCancel = () => {
    Confirm.show(
      "Confirm to cancel borrow",
      `Are you sure you want to cancel borrow "${data?.book_title?.title}"?`,
      "Yes",
      "No",
      () => {
        borrowRecordApi
          .cancelBorrow(data._id)
          .then((res) => {
            Report.success(
              "Cancel success",
              "Cancel order borrow successful",
              "OK"
            );
            KTModal.closeModal("borrow-guide");
            refresh();
          })
          .catch((err) => {
            Report.failure("Cancel failed", err.message ?? "Has error", "OK");
          });
      }
    );
  };

  return (
    <BaseModal modalKey={"borrow-guide"} title={"Borrow Guide"}>
      {(data?.status === "pending" || data?.status === "holding") && (
        <>
          <div className="grid gap-5 mb-2">
            <div className="flex flex-col">
              <p className="text-gray-700 mb-2 text-sm">
                To locate the book "
                <span className="font-semibold">{data?.book_title.title}</span>
                ", please follow the instructions below.
              </p>
              {data?.book ? (
                <div className="text-sm mb-2">
                  <p className="text-gray-800 font-semibold">
                    Location Details:
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>
                      <span className="font-semibold">Section:</span>{" "}
                      {data?.book?.section}
                    </li>
                    <li>
                      <span className="font-semibold">Shelf:</span>{" "}
                      {data?.book?.shelf}
                    </li>
                    <li>
                      <span className="font-semibold">Floor:</span>{" "}
                      {data?.book?.floor}
                    </li>
                    <li>
                      <span className="font-semibold">Position:</span>{" "}
                      {data?.book?.position}
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  {availableCopies?.length === 0 ? (
                    <p className="text-danger my-4 text-sm">
                      Currently, no available copies are in the library. Please
                      check back later or consider reserving other books.
                    </p>
                  ) : (
                    <>
                      <div className="mb-2 text-sm">
                        <p className="text-gray-800 font-semibold">
                          Available Copies:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {availableCopies?.map((copy) => (
                            <li key={copy._id}>
                              <span className="font-semibold">Section:</span>{" "}
                              {copy.section} |{" "}
                              <span className="font-semibold">Shelf:</span>{" "}
                              {copy.shelf} |{" "}
                              <span className="font-semibold">Floor:</span>{" "}
                              {copy.floor} |{" "}
                              <span className="font-semibold">Position:</span>{" "}
                              {copy.position}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </>
              )}
              <p className="text-gray-700 text-sm">
                Please go to the specified section, locate the shelf, and find
                the book on the indicated floor and position.
              </p>
            </div>

            <div className="text-center">
              <button
                className="btn btn-link text-danger hover:text-danger border-b-red-500"
                onClick={onCancel}
              >
                Cancel borrow
              </button>
            </div>
          </div>
        </>
      )}
      {data?.status === "rejected" && (
        <div className="grid gap-5 mb-2">
          <div className="flex flex-col">
            <label className="text-gray-900 font-semibold text-base text-center">
              Borrow has rejected
            </label>
            <div className="text-2sm font-medium text-gray-800 p-2 text-center">
              Borrow has failed. Unfortunately, there are no available copies of
              "<span className="font-semibold">{data?.book_title?.title}</span>"
              at the moment.
            </div>
          </div>
        </div>
      )}
      {data?.status === "canceled" && (
        <div className="grid gap-5 mb-2">
          <div className="flex flex-col">
            <label className="text-gray-900 font-semibold text-base text-center">
              Borrow has canceled
            </label>
            <div className="text-2sm font-medium text-gray-800 p-2 text-center">
              Borrow has been canceled. The book "
              <span className="font-semibold">{data?.book_title?.title}</span>"
              is available for borrowing.
            </div>
          </div>
        </div>
      )}
      {data?.status === "borrowing" && (
        <div className="grid gap-5 mb-2">
          <div className="flex flex-col">
            <label className="text-gray-900 font-semibold text-base text-center">
              Borrow has borrowed
            </label>
            <div className="text-2sm font-medium text-gray-800 p-2 text-center">
              You have borrowed the book "
              <span className="font-semibold">{data?.book_title?.title}</span>"
              . Please return the book before the due date.
            </div>
          </div>
        </div>
      )}
      {data?.status === "losted" && (
        <div className="grid gap-5 mb-2">
          <div className="flex flex-col">
            <label className="text-gray-900 font-semibold text-base text-center">
              Borrow has losted
            </label>
            <div className="text-2sm font-medium text-gray-800 p-2 text-center">
              You have losted the book "
              <span className="font-semibold">{data?.book_title?.title}</span>"
              . Please contact the library for further support
            </div>
          </div>
        </div>
      )}
      {data?.status === "returned" && (
        <div className="grid gap-5 mb-2">
          <div className="flex flex-col">
            <label className="text-gray-900 font-semibold text-base text-center">
              Borrow has returned
            </label>
            <div className="text-2sm font-medium text-gray-800 p-2 text-center">
              You have returned the book "
              <span className="font-semibold">{data?.book_title?.title}</span>"
              . Thank you for using our service.
            </div>
          </div>
        </div>
      )}
    </BaseModal>
  );
};

export default BorrowGuideModal;
