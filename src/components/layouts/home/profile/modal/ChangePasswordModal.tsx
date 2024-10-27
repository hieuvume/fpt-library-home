import { userApi } from "@/api/user";
import PasswordField from "@/components/forms/PasswordField";
import { BaseModal } from "@/components/modal/BaseModal";
import { handleErrorResponse } from "@/utils";
import { Form, Formik } from "formik";
import { Report } from "notiflix";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  current_password: Yup.string()
    .min(1)
    .max(50)
    .required("Password is required"),
  password: Yup.string().min(1).max(50).required("Password is required"),
  confirm_password: Yup.string()
    .min(1)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function ChangePasswordModal() {
  return (
    <>
      <BaseModal modalKey={"update-password"} title="Update Password">
        <Formik
          initialValues={{
            current_password: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setSubmitting(true);
            userApi
              .updatePassword(values)
              .then(() => {
                Report.success(
                  "Success",
                  "Password changed successfully!",
                  "OK"
                );
              })
              .catch((error) => {
                handleErrorResponse(error, setFieldError);
              })
              .finally(() => setSubmitting(false));
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <PasswordField
                label="Current Password"
                name="current_password"
                placeholder="Enter Password"
              />
              <PasswordField
                label="New Password"
                name="password"
                placeholder="Enter Password"
              />
              <PasswordField
                label="Confirm New Password"
                name="confirm_password"
                placeholder="Re-enter Password"
              />
              <div className="mt-3 flex justify-end">
                <div className="flex gap-2">
                  <button className="btn btn-light" data-modal-dismiss="true">
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
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
