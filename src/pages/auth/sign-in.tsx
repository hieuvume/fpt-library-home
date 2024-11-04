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
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(1).max(50).required("Password is required"),
});

export default function SignInPage() {
  const { mutateAuth, loginWithGoogle } = useAuth();
  const router = useRouter();
  const { redirect } = router.query;

  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
      <div className="card max-w-[370px] w-full">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            setSubmitting(true);
            authApi
              .signIn(values)
              .then((data) => {
                const { access_token } = data;
                saveAccessToken(access_token);
                authApi
                  .me()
                  .then((data) => {
                    mutateAuth(data, false);
                    if (redirect) {
                      router.push(redirect as string);
                    } else {
                      router.push("/");
                    }
                  })
                  .finally(() => setSubmitting(false));
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
                  Sign in
                </h3>
                <div className="flex items-center justify-center font-medium">
                  <span className="text-2sm text-gray-700 me-1.5">
                    Need an account?
                  </span>
                  <Link className="text-2sm link" href="/auth/sign-up">
                    Sign up
                  </Link>
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
                    alt=""
                    className="size-3.5 shrink-0"
                    src="/media/brand-logos/google.svg"
                  />
                  Sign-in with Google
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="border-t border-gray-200 w-full"></span>
                <span className="text-2xs text-gray-500 font-medium uppercase">
                  Or
                </span>
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
                forgotLink
              />
              <label className="checkbox-group">
                <input
                  className="checkbox checkbox-sm"
                  name="check"
                  type="checkbox"
                  defaultValue={1}
                />
                <span className="checkbox-label">Remember me</span>
              </label>
              <button
                type="submit"
                className="btn btn-primary flex justify-center grow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Sign in"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

SignInPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
