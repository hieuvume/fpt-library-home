import InputField from "@/components/forms/InputField";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  full_name: Yup.string().required("Full name is required"),
  phone_number: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
      <div className="card max-w-[370px] w-full">
        <Formik
          initialValues={{
            email: "",
            full_name: "",
            phone_number: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // onSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form className="card-body flex flex-col gap-5 p-10">
            <div className="text-center mb-2.5">
              <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                Sign up
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-2sm text-gray-700 me-1.5">
                  Already have an Account ?
                </span>
                <a className="text-2sm link" href="/auth/sign-in/">
                  Sign In
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              <a className="btn btn-light btn-sm justify-center" href="#">
                <img
                  alt=""
                  className="size-3.5 shrink-0"
                  src="/media/brand-logos/google.svg"
                />
                Sign-up with Google
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="border-t border-gray-200 w-full"></span>
              <span className="text-2xs text-gray-600 uppercase">or</span>
              <span className="border-t border-gray-200 w-full"></span>
            </div>
            <InputField
              label="Email"
              name="email"
              placeholder="Enter Email"
              type="email"
            />
            <div className="flex flex-col gap-1">
              <label className="form-label font-normal text-gray-900">
                Password
              </label>
              <div className="input" data-toggle-password="true">
                <input
                  name="user_password"
                  placeholder="Enter Password"
                  type="password"
                  defaultValue=""
                />
                <button
                  className="btn btn-icon"
                  data-toggle-password-trigger="true"
                  type="button"
                >
                  <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
                  <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="form-label font-normal text-gray-900">
                Confirm Password
              </label>
              <div className="input" data-toggle-password="true">
                <input
                  name="user_password"
                  placeholder="Re-enter Password"
                  type="password"
                  defaultValue=""
                />
                <button
                  className="btn btn-icon"
                  data-toggle-password-trigger="true"
                  type="button"
                >
                  <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
                  <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
                </button>
              </div>
            </div>
            <label className="checkbox-group">
              <input
                className="checkbox checkbox-sm"
                name="check"
                type="checkbox"
                defaultValue={1}
              />
              <span className="checkbox-label">
                I accept
                <a className="text-2sm link" href="#">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>
            <button className="btn btn-primary flex justify-center grow">
              Sign up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

SignUpPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
