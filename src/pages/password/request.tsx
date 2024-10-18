import passwordApi from "@/api/password";
import InputField from "@/components/forms/InputField";
import AuthLayout from "@/components/layouts/AuthLayout";
import { handleErrorResponse } from "@/utils";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
});

export default function ForgotPasswordPage() {
    const [lastSent, setLastSent] = useState(null);
    const [resend, setResend] = useState(0);

    useEffect(() => {
        if (lastSent) {
            const interval = setInterval(() => {
                setResend((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [lastSent])

    const onSubmit = (values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        passwordApi.request(values).catch((error) => {
            handleErrorResponse(error, setFieldError)
        }).then(() => {
            setLastSent(new Date().getTime())
            setResend(60)
        })
            .finally(() => setSubmitting(false))
    }

    const onResend = (values, { setSubmitting, setFieldError }) => {
        if (resend > 0) return;
        onSubmit(values, { setSubmitting, setFieldError });
    }

    return (
        <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
            <div className="card max-w-[370px] w-full">
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, isSubmitting, setFieldError, setSubmitting }) => (
                        <>
                            {lastSent ? (
                                <div className="card-body p-10">
                                    <div className="flex justify-center py-10">
                                        <Image
                                            width={130}
                                            height={130}
                                            alt="image"
                                            className="dark:hidden max-h-[130px]"
                                            src="/media/illustrations/30.svg"
                                        />
                                        <Image
                                            width={130}
                                            height={130}
                                            alt="image"
                                            className="light:hidden max-h-[130px]"
                                            src="/media/illustrations/30-dark.svg"
                                        />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 text-center mb-3">
                                        Check your email
                                    </h3>
                                    <div className="text-2sm text-center text-gray-700 mb-5">
                                        Please click the link sent to your email {" "}
                                        <span
                                            className="text-2sm text-gray-800 font-medium hover:text-primary-active"
                                        >
                                            {values.email}
                                        </span>
                                        <br />
                                        to reset your password. Thank you
                                    </div>
                                    <div className="flex justify-center mb-5">
                                        <a
                                            className="btn btn-primary btn-sm flex justify-center"
                                            href="https://mail.google.com/mail/u/0/#inbox"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Check mail
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-xs text-gray-600">Didn’t receive an email?</span>
                                        <button
                                            type="button"
                                            className="text-xs font-medium link"
                                            onClick={() => onResend(values, { setSubmitting, setFieldError })}
                                        >
                                            Resend {resend > 0 && <>({resend}s)</>}
                                        </button>
                                    </div>
                                </div>

                            ) : (
                                <Form className="card-body flex flex-col gap-3 p-10">
                                    <div className="text-center">
                                        <h3 className="text-lg font-medium text-gray-900">Your Email</h3>
                                        <span className="text-2sm text-gray-700">
                                            Enter your email to reset password
                                        </span>
                                    </div>
                                    <InputField
                                        label="Email"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary flex justify-center grow"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Continue"}
                                        <i className="ki-filled ki-black-right"></i>
                                    </button>
                                </Form>
                            )}
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
}

ForgotPasswordPage.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};
