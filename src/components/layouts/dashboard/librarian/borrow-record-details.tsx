import { BorrowRecord } from "@/models/borrow-record";
import BorrowStatusCell from "../../home/borrows/cell/BorrowStatusCell";
import Link from "next/link";
import { formatCurrency, formatDateTime } from "@/utils";
import { Confirm, Report } from "notiflix";
import { borrowRecordDashboardApi } from "@/api/borrow-record";

export default function BorrowRecordDetails({
  record,
  mutate,
}: {
  record: BorrowRecord;
  mutate: any;
}) {
  const onReturned = () => {
    Confirm.prompt(
      "Returned",
      "Confirm to return this book, please enter the after status",
      "",
      "Confirm",
      "Cancel",
      (clientAnswer) => {
        borrowRecordDashboardApi
          .returnedBook(record._id, clientAnswer)
          .then(() => {
            Report.success(
              "Success",
              "Returned book successfully",
              "OK",
              mutate
            );
          });
      }
    );
  };

  const onLosted = () => {
    Confirm.prompt(
      "Losted",
      "Confirm to lost this book, please enter the penatly total",
      "",
      "Confirm",
      "Cancel",
      (clientAnswer) => {
        borrowRecordDashboardApi
          .lostedBook(record._id, clientAnswer)
          .then(() => {
            Report.success("Success", "Losted book successfully", "OK", mutate);
          });
      }
    );
  };

  const onReject = () => {
    Confirm.prompt(
      "Reject",
      "Confirm to reject this book, please enter the note",
      "",
      "Confirm",
      "Cancel",
      (clientAnswer) => {
        borrowRecordDashboardApi
          .rejectBorrow(record._id, clientAnswer)
          .then(() => {
            Report.success(
              "Success",
              "Reject borrow successfully",
              "OK",
              mutate
            );
          });
      }
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">User Borrow Book</h3>
            </div>
            <div className="card-body pt-5 pb-5">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">Email</td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Full Name:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.full_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Phone Number:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.phone_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Addrees:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.address}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Citizen identification number:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.id_card?.id_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Card Number:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.current_membership?.card_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Membership Package
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.user?.current_membership?.membership?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Borrow Details</h3>
              <div className="ms-auto">
                {(record?.status === "pending" ||
                  record?.status === "holding") && (
                  <>
                    <button
                      className="btn btn-sm btn-outline btn-primary me-2"
                      data-modal-toggle="#approve"
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-sm btn-outline btn-danger"
                      onClick={onReject}
                    >
                      Reject
                    </button>
                  </>
                )}

                {record?.status === "borrowing" && (
                  <>
                    <button
                      className="btn btn-sm btn-outline btn-success me-2"
                      onClick={onReturned}
                    >
                      Returned
                    </button>
                    <button
                      className="btn btn-sm btn-outline btn-danger"
                      onClick={onLosted}
                    >
                      Losted
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="card-body pt-5 pb-5">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Book Title
                    </td>
                    <td className="text-sm font-semibold pb-3.5">
                      <Link href={"/"} className="text-primary">
                        {record?.book_title?.title}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Book Unique ID
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.book?.uniqueId || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Before Status
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.before_status || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      After Status
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {record?.after_status || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Penatly Total
                    </td>
                    <td className="text-sm text-danger font-semibold pb-3.5">
                      {formatCurrency(record?.penatly_total) || "N/A"} đ
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Status
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      <BorrowStatusCell value={record?.status} />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Borrow Date
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {formatDateTime(record?.borrow_date) || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Due Date
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {formatDateTime(record?.due_date) || "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Return Date
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {formatDateTime(record?.return_date) || "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
