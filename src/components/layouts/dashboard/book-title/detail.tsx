import { bookTitleDashboardApi } from "@/api/book-title";
import { BookTitle } from "@/models/book-title";
import { on } from "events";
import { s } from "framer-motion/client";
import { Confirm, Report } from "notiflix";
import { useState } from "react";
import UpdateBookTitleModal from "./modal";
import { BaseModal } from "@/components/modal/BaseModal";
import MemberShip from "./membership";

export default function DetailBookTitle({ bookTitle, mutate }: { bookTitle: BookTitle, mutate: any }) {
  const [loading, setLoading] = useState(false);

  const onRemoveCategory = async (categoryId: string) => {
    try {
      Confirm.show(
        "Confirm Category Removal",
        "Are you sure you want to remove this category?",
        "Yes",
        "No",
        async () => {
          try {
            setLoading(true);
            await bookTitleDashboardApi.deleteCategory(bookTitle._id, categoryId);
            Report.success("Success", "Category removed successfully", "OK");
            mutate();
          } catch (error) {
            console.error(error);
            Report.failure("Error", "Failed to remove category", "OK");
          } finally {
            setLoading(false);
          }
        },
        () => {
          console.log("Category removal canceled.");
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const onRemoveMembership = async (membershipId: string) => {
    try {
      Confirm.show(
        "Confirm Membership Removal",
        "Are you sure you want to remove this membership?",
        "Yes",
        "No",
        async () => {
          try {
            setLoading(true);
            await bookTitleDashboardApi.deleteMembership(bookTitle._id, membershipId);
            Report.success("Success", "Membership removed successfully", "OK");
            mutate();
          } catch (error) {
            console.error(error);
            Report.failure("Error", "Failed to remove membership", "OK");
          } finally {
            setLoading(false);
          }
        },
        () => {
          console.log("Membership removal canceled.");
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container-fixed">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="card min-w-full">
            <div className="card-header">
              <h3 className="card-title">Book Title Details</h3>
            </div>
            <div className="card-table scrollable-x-auto pb-3">
              <table className="table align-middle text-sm text-gray-500">
                <tbody>
                  <tr>
                    <td className="py-2 min-w-28 text-gray-600 font-normal">
                      Photo Book
                    </td>
                    <td className="py-2 text-gray700 font-normal min-w-32 text-2sm">
                      150x150px JPEG, PNG Image
                    </td>
                    <td className="py-2 text-center">
                      <div className="flex justify-center items-center">
                        <div
                          className="image-input size-16"
                          data-image-input="true"
                          id="avatar_image_input"
                        >
                          <input
                            accept=".png, .jpg, .jpeg"
                            name="avatar"
                            type="file"

                          />
                          <input name="avatar_remove" type="hidden" />
                          <div
                            className="btn btn-icon btn-icon-xs btn-light shadow-default absolute z-1 size-5 -top-0.5 -right-0.5 rounded-full"
                            data-image-input-remove=""
                            data-tooltip="#image_input_tooltip"
                            data-tooltip-trigger="hover"
                          >
                            <i className="ki-filled ki-cross"></i>
                          </div>
                          <span className="tooltip" id="image_input_tooltip">
                            Click to remove or revert
                          </span>
                          <div
                            className="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300"
                            style={{
                              backgroundImage: `url('/media/avatars/blank.png')`,
                            }}
                          >
                            <div
                              className="image-input-preview rounded-full"
                              style={{
                                backgroundImage: `url(${bookTitle?.cover_image ||
                                  "/media/avatars/blank.png"
                                  })`,
                              }}
                            ></div>
                            <div className="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">
                              <svg
                                className="fill-light opacity-80"
                                height={12}
                                viewBox="0 0 14 12"
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 6.99984 9.64585Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z"
                                  fill=""
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600 font-normal">Title</td>
                    <td className="py-2 text-gray-800 font-normaltext-sm">
                      {bookTitle?.title}
                    </td>
                    <td className="py-2 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#full-name"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 font-normal">
                      Author
                    </td>
                    <td className="py-3 text-gray-700 text-sm font-normal">
                      {bookTitle?.author.join(", ")}
                    </td>
                    <td className="py-3 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#update-birthday"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 font-normal">ISBN</td>
                    <td className="py-3 text-gray-700 text-sm font-normal">
                      {bookTitle?.ISBN}
                    </td>
                    <td className="py-3 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#update-ISBN"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-600 font-normal">Description</td>
                    <td className="py-3 text-gray-700 text-2sm font-normal">
                      {bookTitle?.description}
                    </td>
                    <td className="py-3 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#update-Description"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card min-w-full">
            <div className="card-header">
              <h3 className="card-title">Categories and Membership</h3>
            </div>
            <div className="card-table scrollable-x-auto pb-3">
              <table className="table align-middle text-sm text-gray-500">
                <tbody>
                  <tr>
                    <td className="py-2 min-w-36 text-gray-600 font-normal">Categories</td>
                    <td className="py-2 min-w-60 flex flex-wrap">
                      {bookTitle?.categories.map((category) => (
                        <span key={category._id} className="relative inline-flex items-center mr-2 mb-2">
                          <span className="badge badge-sm badge-outline mr-1 pr-6 pl-3">{category?.title}</span>
                          <button
                            type="button"
                            onClick={() => onRemoveCategory(category._id)}
                            className="absolute top-0 right-0 -mt-2 -mr-2 bg-white rounded-full shadow-md border border-gray-300 hover:bg-red-200 hover:text-white text-gray-500 w-4 h-4 flex items-center justify-center"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </td>
                    <td className="py-3 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#update-password"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 min-w-36 text-gray-600 font-normal">
                      Memberships
                    </td>
                    <td className="py-2 text-gray-700 font-normal flex flex-wrap">
                      {bookTitle?.memberships.map((membership) => (
                        <span key={membership._id} className="relative inline-flex items-center mr-2 mb-2">
                          <button className={`badge badge-sm badge-outline badge-${membership.color} pr-6 pl-3`}>
                            {membership?.name}
                          </button>
                          <button
                            type="button"
                            onClick={() => onRemoveMembership(membership._id)}
                            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md border border-gray-300 hover:bg-red-500 hover:text-white text-gray-500 w-4 h-4 flex items-center justify-center"
                            style={{ fontSize: "10px" }}
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </td>

                    <td className="py-3 text-center">
                      <button
                        className="btn btn-sm btn-icon btn-clear btn-primary"
                        data-modal-toggle="#update-membership"
                      >
                        <i className="ki-filled ki-notepad-edit"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {bookTitle && (
  <>
    <UpdateBookTitleModal
      modalKey="full-name"
      label="Title"
      name="title"
      defaultValue={bookTitle.title}
      bookId={bookTitle._id}
    />
    <UpdateBookTitleModal
      modalKey="update-birthday"
      label="Author"
      name="author"
      type="text"
      defaultValue={bookTitle.author.join(", ")}
      bookId={bookTitle._id}
    />
    <UpdateBookTitleModal
      modalKey="update-ISBN"
      label="ISBN"
      name="ISBN"
      type="text"
      defaultValue={bookTitle.ISBN}
      bookId={bookTitle._id}
    />
    <UpdateBookTitleModal
      modalKey="update-Description"
      label="Description"
      name="description"
      type="text"
      defaultValue={bookTitle.description}
      bookId={bookTitle._id}
    />
  </>
)}
    </div>
  );
}