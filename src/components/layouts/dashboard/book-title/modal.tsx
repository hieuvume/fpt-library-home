import { BaseModal } from "@/components/modal/BaseModal";
import { UserProfile } from "@/models/auth";
import { formatDate } from "@/utils/index";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Report } from "notiflix";
import { userApi } from "@/api/user";
import { log } from "console";
import { useRouter } from "next/router";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import useAuth from "@/hooks/useAuth";
import { bookTitleDashboardApi } from "@/api/book-title";



type Props = {
  modalKey: string;
  name: string;
  label: string;
  type?: "text" | "email" | "number" | "date" | "select";
  options?: { label: string; value: string }[];
  defaultValue?: string;
  bookId: string;
};

export default function UpdateBookTitleModal({
  modalKey,
  label,
  name,
  type = "text",
  options = [],
  defaultValue,
  bookId,
}: Props) {
  const { mutateAuth } = useAuth();
  console.log("bookId", bookId)
  console.log("defaultValue", defaultValue)
  return (
    <>

      <BaseModal modalKey={modalKey} title="Update Profile">
        <Formik
          initialValues={{ [name]: defaultValue }}
          enableReinitialize={true}
          //  validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setSubmitting(true);
            bookTitleDashboardApi
              .updateBookTitle(bookId, values)
              .then((res) => {
                Report.success(
                  "Success",
                  "Profile updated successfully!",
                  "OK"
                );
                mutateAuth();
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form id={`update-profile-${modalKey}`}>
              {type === "select" ? (
                <SelectField label={label} name={name} options={options} />
              ) : (
                <InputField
                  label={label}
                  name={name}
                  type={type}
                  placeholder={`Enter your ${label?.toLocaleLowerCase()}`}
                />
              )}

              <div className="mt-3 flex justify-end">
                <div className="flex gap-2">
                  <button className="btn btn-light" data-modal-dismiss="true">
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    form={`update-profile-${modalKey}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save changes"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </BaseModal>
    </>
  );
}
