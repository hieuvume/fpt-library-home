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

const validationSchema = Yup.object({
  full_name: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  id_card: Yup.object({
    id_number: Yup.string().required("ID number is required"),
    date: Yup.string().required("Date of issue is required"),
    place: Yup.string().required("Place of issue is required"),
  }),
});

export default function ProfileModal({ children }: { children: UserProfile }) {
  const initialValues = {
    avatar: children?.avatar_url || "/media/avatars/blank.png",
    full_name: children?.full_name || "",
    email: children?.email || "",
    phone_number: children?.phone_number || "",
    address: children?.address || "",
    id_card: {
      id_number: children?.id_card?.id_number || "",
      date: formatDate(children?.id_card?.date) || "",
      place: children?.id_card?.place || "",
    },
  };
  const router = useRouter();

  const handleSubmit = (values: any) => {
    console.log("Updated Profile Data:", values);
  };
  return (
    <>
      <BaseModal modalKey={"auth-modal"} title="Settings - Modal">
        <div className="flex grow gap-5 lg:gap-7.5">
          <div className="hidden lg:block w-[230px] shrink-0">
            <div
              className="w-[230px] fixed z-10 scrollable-y-auto"
              data-scrollable="true"
              data-scrollable-height="auto"
              data-scrollable-offset="225px"
              data-scrollable-wrappers="#modal_settings_content"
              style={{ height: 922 }}
            >
              <div
                className="flex flex-col grow relative before:absolute before:left-[11px] before:top-0 before:bottom-0 before:border-l before:border-gray-200"
                data-scrollspy="true"
                data-scrollspy-offset="80px|lg:110px"
                data-scrollspy-target="#modal_settings_body"
              >
                <div className="flex flex-col">
                  <div className="pl-6 pr-2.5 py-2.5 text-2sm font-semibold text-gray-900">
                    Authentication
                  </div>
                  <a
                    className="flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-3.5 border border-transparent text-2sm text-gray-800 hover:text-primary hover:font-medium scrollspy-active:bg-secondary-active scrollspy-active:text-primary scrollspy-active:font-medium dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg dark:scrollspy-active:bg-coal-300 dark:scrollspy-active:border-gray-100"
                    data-scrollspy-anchor="true"
                    href="#basic_settings"
                  >
                    <span className="flex w-1.5 relative before:absolute before:top-0 before:size-1.5 before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 scrollspy-active:before:bg-primary"></span>
                    Settings
                  </a>
                  <div className="flex flex-col">
                    <a
                      className="flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-3.5 border border-transparent text-2sm text-gray-800 hover:text-primary hover:font-medium scrollspy-active:bg-secondary-active scrollspy-active:text-primary scrollspy-active:font-medium dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg dark:scrollspy-active:bg-coal-300 dark:scrollspy-active:border-gray-100"
                      data-scrollspy-anchor="true"
                      href="#auth_password"
                    >
                      <span className="flex w-1.5 relative before:absolute before:top-0 before:size-1.5 before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 scrollspy-active:before:bg-primary"></span>
                      Password
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="pl-6 pr-2.5 py-2.5 text-2sm font-semibold text-gray-900">
                    Account
                  </div>
                </div>
                <a
                  className="flex items-center rounded-lg pl-2.5 pr-2.5 py-2.5 gap-1.5 border border-transparent text-2sm text-gray-800 hover:text-primary hover:font-medium scrollspy-active:bg-secondary-active scrollspy-active:text-primary scrollspy-active:font-medium dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg dark:scrollspy-active:bg-coal-300 dark:scrollspy-active:border-gray-100"
                  data-scrollspy-anchor="true"
                  href="#delete_account"
                >
                  <span className="flex w-1.5 relative before:absolute before:top-0 before:size-1.5 before:rounded-full before:-translate-x-2/4 before:-translate-y-2/4 scrollspy-active:before:bg-primary"></span>
                  Delete Account
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch grow gap-5 lg:gap-7.5">
            <div className="card pb-2.5">
              <div className="card-header" id="basic_settings">
                <h3 className="card-title">Profile Edit</h3>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values: any, { setSubmitting, setFieldError }) => {
                  setSubmitting(true);
                  userApi
                    .updateProfile(values)
                    .then((data) => {
                      Report.success(
                        "Success",
                        "Profile updated successfully!",
                        "OK",
                        () => {
                          console.log(data);
                          window.location.reload();
                        }
                      );
                    })
                    .catch((error) => {
                      Report.failure(
                        "Error",
                        "Profile update failed!",
                        "OK",
                        () => {
                          setFieldError(
                            "email",
                            error?.response?.data?.message ||
                              "Something went wrong"
                          );
                        }
                      );
                    })
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              >
                {({ setFieldValue }) => (
                  <Form className="card-body grid gap-5">
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">Photo</label>
                      <div className="flex items-center justify-between flex-wrap grow gap-2.5">
                        <span className="text-2sm">
                          150x150px JPEG, PNG Image
                        </span>
                        <div
                          className="image-input size-16"
                          data-image-input="true"
                        >
                          <input
                            accept=".png, .jpg, .jpeg"
                            name="avatar"
                            type="file"
                            onChange={(event) =>
                              setFieldValue("avatar", event.target.files?.[0])
                            }
                          />
                          <input name="avatar_remove" type="hidden" />
                          <div
                            className="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300"
                            style={{
                              backgroundImage: `url(${initialValues.avatar})`,
                            }}
                          >
                            <div
                              className="image-input-preview rounded-full"
                              style={{
                                backgroundImage: `url(${children?.avatar_url})`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">Name</label>
                      <Field className="input" name="full_name" type="text" />
                      <ErrorMessage
                        name="full_name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">
                        Phone number
                      </label>
                      <Field
                        className="input"
                        name="phone_number"
                        type="text"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">Email</label>
                      <Field className="input" name="email" type="text" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">Address</label>
                      <Field className="input" name="address" type="text" />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">Country</label>
                      <Field as="select" className="select" name="country">
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </Field>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">
                        Card Number ID
                      </label>
                      <Field
                        className="input"
                        name="id_card.id_number"
                        type="text"
                      />
                      <ErrorMessage
                        name="id_card.id_number"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                      <label className="form-label max-w-56">
                        Date of issue
                      </label>
                      <Field
                        className="input"
                        name="id_card.date"
                        type="date"
                        // Giới hạn ngày lớn nhất là ngày hiện tại
                        max={new Date().toISOString().split("T")[0]}
                        defaultValue={new Date().toISOString().slice(0, 16)}
                      />
                      <ErrorMessage
                        name="id_card.date"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
                      <label className="form-label max-w-56">
                        Place of issue
                      </label>
                      <Field
                        className="input"
                        name="id_card.place"
                        type="text"
                      />
                      <ErrorMessage
                        name="id_card.place"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button className="btn btn-primary" type="submit">
                        Save Changes
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="card">
              <div className="card-header" id="auth_password">
                <h3 className="card-title">Password</h3>
              </div>
              <div className="card-body grid gap-5">
                <div className="w-full">
                  <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">
                      Current Password
                    </label>
                    <input
                      className="input"
                      placeholder="Your current password"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">New Password</label>
                    <input
                      className="input"
                      placeholder="New password"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">
                      Confirm New Password
                    </label>
                    <input
                      className="input"
                      placeholder="Confirm new password"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2.5">
                  <button className="btn btn-primary">Reset Password</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="delete_account">
                <h3 className="card-title">Delete Account</h3>
              </div>
              <div className="card-body lg:py-7.5 lg:gap-7.5 gap-5">
                <div className="flex flex-col gap-5">
                  <div className="text-2sm text-gray-800">
                    We regret to see you leave. Confirm account deletion below.
                    Your data will be permanently removed. Thank you for being
                    part of our community. Please check our
                    <a className="link" href="#">
                      Setup Guidelines
                    </a>
                    if you still wish continue.
                  </div>
                  <label className="checkbox-group">
                    <input
                      className="checkbox checkbox-sm"
                      name="delete"
                      type="checkbox"
                      defaultValue={1}
                    />
                    <span className="checkbox-label">
                      Confirm deleting account
                    </span>
                  </label>
                </div>
                <div className="flex justify-end gap-2.5">
                  <button className="btn btn-light">Deactivate Instead</button>
                  <button className="btn btn-danger">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseModal>
    </>
  );
}
