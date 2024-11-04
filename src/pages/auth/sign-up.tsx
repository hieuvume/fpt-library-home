import authApi from "@/api/auth";
import InputField from "@/components/forms/InputField";
import PasswordField from "@/components/forms/PasswordField";
import AuthLayout from "@/components/layouts/AuthLayout";
import useAuth from "@/hooks/useAuth";
import { handleErrorResponse } from "@/utils";
import { saveAccessToken } from "@/utils/auth";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  full_name: Yup.string().required("Full name is required"),
  phone_number: Yup.string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, {
      message: "Phone number is not valid",
    })
    .required("Phone number is required"),
  password: Yup.string().min(1).max(50).required("Password is required"),
  confirm_password: Yup.string()
    .min(1)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function SignUpPage() {
  const { mutateAuth, loginWithGoogle, redirectToLogin } = useAuth();
  const router = useRouter();

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
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setSubmitting(true);
            authApi
              .signUp(values)
              .then((data) => {
                Report.success("Success", "Sign up successfully!", "OK", () => {
                  const { access_token } = data;
                  saveAccessToken(access_token);
                  authApi
                    .me()
                    .then((data) => {
                      mutateAuth(data, false);
                      router.push("/");
                    })
                    .finally(() => setSubmitting(false));
                });
              })
              .catch((error) => {
                handleErrorResponse(error, setFieldError);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="card-body flex flex-col gap-3 p-10">
              <div className="text-center mb-2.5">
                <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
                  Sign up
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-2sm text-gray-700 me-1.5">
                    Already have an Account ?
                  </span>
                  <span
                    className="text-2sm link cursor-pointer"
                    onClick={redirectToLogin}
                  >
                    Sign In
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                <span
                  className="btn btn-light btn-sm justify-center"
                  onClick={loginWithGoogle}
                >
                  <Image
                    width={20}
                    height={20}
                    alt="Google"
                    className="size-3.5 shrink-0"
                    src="/media/brand-logos/google.svg"
                  />
                  Sign-up with Google
                </span>
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
              <PasswordField
                label="Password"
                name="password"
                placeholder="Enter Password"
              />
              <PasswordField
                label="Confirm Password"
                name="confirm_password"
                placeholder="Re-enter Password"
              />
              <InputField
                label="Full Name"
                name="full_name"
                placeholder="Enter Full Name"
              />
              <InputField
                label="Phone Number"
                name="phone_number"
                placeholder="Enter Phone Number"
              />
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
              <button
                className="btn btn-primary flex justify-center grow"
                disabled={isSubmitting}
                type="submit"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

SignUpPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
