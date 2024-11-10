import { borrowRecordDashboardApi } from "@/api/borrow-record";
import { BaseModal } from "@/components/modal/BaseModal";
import { BorrowRecord } from "@/models/borrow-record";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import useSWR from "swr";
import * as Yup from "yup";

const validationSchema = Yup.object({
  uniqueId: Yup.string(),
  note: Yup.string().max(250, "Note must be 250 characters or less"),
  before_status: Yup.string().required("Before status is required"),
});

export default function Approve({ record }: { record: BorrowRecord }) {
  const bookId = record?.book_title?._id;

  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    bookId ? `/borrow-records-dashboard/book-loans/${bookId}` : null,
    () => borrowRecordDashboardApi.getBookLoans(bookId)
  );

  const handleSubmit = (values) => {
    const data = {
      bookId: record?.book === null?values.uniqueId:record?.book?._id,
      userId: record.user._id,
      before_status: values.before_status,
    };
    borrowRecordDashboardApi.approveBorrow(record._id, data).then(() => {
      Report.success("Success", "Approve borrow successfully", "OK", () =>
        window.location.reload()
      );
    });
  };

  return (
    <BaseModal modalKey="approve" title="Approve Borrow">
      <Formik
        initialValues={{
          uniqueId: "",
          note: "",
          before_status: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 p-4">
            {record?.book === null && (
              <div>
                <label
                  htmlFor="uniqueId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Book Unique ID
                </label>
                <Field
                  as="select"
                  name="uniqueId"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select unique ID</option>
                  {data?.map((book) => (
                    <option key={book.uniqueId} value={book._id}>
                      {book.uniqueId}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="uniqueId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}
            <div>
              <label
                htmlFor="before_status"
                className="block text-sm font-medium text-gray-700"
              >
                Before Status
              </label>
              <Field
                type="text"
                name="before_status"
                placeholder="Previous status of the book"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="before_status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700"
              >
                Note
              </label>
              <Field
                as="textarea"
                name="note"
                placeholder="Add any relevant notes about the book's condition..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="note"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-sm btn-primary btn-outline"
            >
              {isSubmitting ? "Submitting..." : "Approve Borrow"}
            </button>
          </Form>
        )}
      </Formik>
    </BaseModal>
  );
}
