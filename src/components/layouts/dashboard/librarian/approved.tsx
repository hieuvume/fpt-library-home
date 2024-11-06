import { borrowRecordDashboardApi } from "@/api/borrow-record";
import { BaseModal } from "@/components/modal/BaseModal";
import { BorrowRecord, dashboardBorrowRecord } from "@/models/borrow-record";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Report } from "notiflix";
import { useRouter } from "next/router";

const validationSchema = Yup.object({
  uniqueId: Yup.string().required("Unique ID is required"),
  status: Yup.string().required("Status is required"),
  note: Yup.string().max(250, "Note must be 250 characters or less"),
  before_status: Yup.string().required("Before status is required"),
});

export default function Approve({ BorrowRecord }: { BorrowRecord: dashboardBorrowRecord }) {
  const bookId = BorrowRecord?.book_title?._id;
  console.log(BorrowRecord?.user._id);
  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    bookId ? `/borrow-records-dashboard/book-loans/${bookId}` : null,
    () => borrowRecordDashboardApi.getBookLoans(bookId)
  );

  const handleSubmit = (values) => {
    const data = {
      borrowId: BorrowRecord._id,
      bookId: values.uniqueId,
      borrowStatus: values.status,
      bookStatus: 'borrowed',
      userId: BorrowRecord.user._id,
    };
    borrowRecordDashboardApi.approveBrrow(data).then(() => {
     
      Report.success("Success", "Approve borrow successfully", "OK",()=> window.location.reload());
    });
  };

  return (
    <BaseModal modalKey="approve" title="Approve Borrow">
      <Formik
        initialValues={{
          uniqueId: "",
          status: "borrowing",
          note: "",
          before_status: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 p-4">
            <div>
              <label htmlFor="uniqueId" className="block text-sm font-medium text-gray-700">
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
              <ErrorMessage name="uniqueId" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <Field
                as="select"
                name="status"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select status</option>
                <option value="Available">Available</option>
                <option value="Borrowed">Borrowed</option>
                <option value="Reserved">Reserved</option>
                <option value="Overdue">Overdue</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="before_status" className="block text-sm font-medium text-gray-700">
                Before Status
              </label>
              <Field
                type="text"
                name="before_status"
                placeholder="Previous status of the book"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="before_status" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                Note
              </label>
              <Field
                as="textarea"
                name="note"
                placeholder="Add any relevant notes about the book's condition..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="note" component="div" className="text-red-500 text-sm" />
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
