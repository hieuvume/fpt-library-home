import passwordApi from "@/api/password";
import PasswordField from "@/components/forms/PasswordField";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    password: Yup.string().min(1).max(50).required("Password is required"),
    confirm_password: Yup.string()
        .min(1)
        .max(50)
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function ResetPasswordPage() {
    const router = useRouter();
    const { token } = router.query;

    return (
        <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
            <div className="card max-w-[370px] w-full">
                <Formik
                    initialValues={{
                        password: "",
                        confirm_password: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        setSubmitting(true);
                        passwordApi.reset({ ...values, token }).then(() => {
                            Report.success("Success", "Password reset successfully!", "OK", () => {
                                router.push("/auth/sign-in");
                            });
                        }).finally(() => setSubmitting(false))
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="card-body flex flex-col gap-3 p-10">
                            <div className="text-center">
                                <h3 className="text-lg font-medium text-gray-900">Reset Password</h3>
                                <span className="text-2sm text-gray-700">Enter your new password</span>
                            </div>
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
                            <button type="submit" className="btn btn-primary flex justify-center grow">{isSubmitting ? 'Loading...' : 'Confirm'}</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

ResetPasswordPage.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};
