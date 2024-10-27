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

const validationSchema = Yup.object({
  full_name: Yup.string().min(
    2,
    "Full name must be at least 2 characters long"
  ),
  email: Yup.string().email("Invalid email address"),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits"),
  address: Yup.string(),
  id_card: Yup.object({
    id_number: Yup.string(),
    date: Yup.string(),
    place: Yup.string(),
  }),
});

type Props = {
  modalKey: string;
  name: string;
  label: string;
  type?: "text" | "email" | "number" | "date" | "select";
  options?: { label: string; value: string }[];
  defaultValue?: string;
};

export default function UpdateProfileModal({
  modalKey,
  label,
  name,
  type = "text",
  options = [],
  defaultValue,
}: Props) {
  const { mutateAuth } = useAuth();

  return (
    <>
      <BaseModal modalKey={modalKey} title="Update Profile">
        <Formik
          initialValues={{ [name]: defaultValue }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setSubmitting(true);
            userApi
              .updateProfile(values)
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
