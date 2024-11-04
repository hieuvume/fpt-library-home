import { bookApi } from "@/api/book"
import BookDetails from "@/components/layouts/home/book_details"
import FeedbackDetails from "@/components/layouts/home/feedback"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr"

export default function BookDetailPage() {
    const router = useRouter()
    const bookId = router.query.id as string
    if (!bookId) return <div>Loading...</div>
    const { data: details, isLoading: loadingDetails, error: errorDetails } = useSWR(`books/details/${bookId}`, () => bookApi.getDetailsById(bookId))
    const { data: feebacks, isLoading: loadingFeedback, error: errorFeedback } = useSWR(`feebacks/${bookId}`, () => bookApi.findFeedbacksByTitleId(bookId))
    if (loadingDetails) {
        return <div>Loading...</div>
    }
    console.log(feebacks?.docs[0].feedbacks?.map((data) => data.rating))
    return (
        <div className="container-fixed">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
                <div className="col-span-2">
                    <div className="flex flex-col gap-5 lg:gap-7.5">
                        <BookDetails children={details} />
                        <FeedbackDetails children={feebacks?.docs[0].feedbacks} />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col gap-5 lg:gap-7.5">
                        <div className="card">
                            <div className="card-header">
                                <div className="flex items-center flex-wrap lg:flex-nowrap gap-1.5">
                                    <h3 className="card-title">Disable default Branding</h3>
                                    <span className="badge badge-xs badge-primary badge-outline">
                                        Pro
                                    </span>
                                </div>
                            </div>
                            <div className="card-body flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-2sm text-gray-700">
                                        Remove any ktstudio.io branding and media. I.e. powered by
                                        ktstudio.io
                                    </p>
                                    <div>
                                        <a className="btn btn-link flex-none" href="#">
                                            View Plans
                                        </a>
                                    </div>
                                </div>
                                <div className="switch">
                                    <input
                                        disabled
                                        name="param"
                                        type="checkbox"
                                        defaultValue={1}
                                    />
                                </div>
                            </div>
                            <div className="card-footer justify-center">
                                <button className="btn btn-secondary btn-sm disabled">
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body py-10 flex flex-col gap-5 lg:gap-7.5">
                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="mb-2.5">
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-brand-clarity fill-brand-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-emoji-happy text-1.5xl ps-px text-brand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="text-base font-semibold text-gray-900 hover:text-primary"
                                        href="#"
                                    >
                                        Enhancing Usability: Adaptive Shortcut Controls
                                    </a>
                                    <p className="text-sm text-gray-700">
                                        Integrate modifier keys for activating shortcuts to streamline
                                        your navigation and enhance productivity without disrupting your
                                        typing flow.
                                    </p>
                                    <a className="btn btn-link flex-none" href="#">
                                        Learn more
                                    </a>
                                </div>
                                <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="mb-2.5">
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-brand-clarity fill-brand-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-picture text-1.5xl ps-px text-brand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="text-base font-semibold text-gray-900 hover:text-primary"
                                        href="#"
                                    >
                                        Visual Accessibility: High Contrast Theme Activation
                                    </a>
                                    <p className="text-sm text-gray-700">
                                        Switch to a high-contrast color scheme to improve on-screen text
                                        readability, reduce eye strain, and facilitate better visual
                                        ergonomics for long work sessions.
                                    </p>
                                    <a className="btn btn-link flex-none" href="#">
                                        Learn more
                                    </a>
                                </div>
                                <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="mb-2.5">
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-brand-clarity fill-brand-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-mouse-square text-1.5xl ps-px text-brand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="text-base font-semibold text-gray-900 hover:text-primary"
                                        href="#"
                                    >
                                        Media Handling: Autoplay Videos Customization Options
                                    </a>
                                    <p className="text-sm text-gray-700">
                                        Customize your video engagement experience with user-centric
                                        autoplay settings that align with your system preferences or
                                        manual selection for a tailored approach.
                                    </p>
                                    <a className="btn btn-link flex-none" href="#">
                                        Learn more
                                    </a>
                                </div>
                                <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
                                <div className="flex flex-col items-start gap-2.5">
                                    <div className="mb-2.5">
                                        <div className="relative size-[50px] shrink-0">
                                            <svg
                                                className="w-full h-full stroke-brand-clarity fill-brand-light"
                                                fill="none"
                                                height={48}
                                                viewBox="0 0 44 48"
                                                width={44}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
                  18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
                  39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                                                    fill=""
                                                ></path>
                                                <path
                                                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
                  18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
                  39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                                                    stroke=""
                                                ></path>
                                            </svg>
                                            <div className="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                                                <i className="ki-filled ki-route text-1.5xl ps-px text-brand"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="text-base font-semibold text-gray-900 hover:text-primary"
                                        href="#"
                                    >
                                        Navigation Preferences: Desktop App Link Integration Features
                                    </a>
                                    <p className="text-sm text-gray-700">
                                        Enhance your workflow integration by configuring external links
                                        to open seamlessly within the desktop application, providing a
                                        unified and efficient user experience.
                                    </p>
                                    <a className="btn btn-link flex-none" href="#">
                                        Learn more
                                    </a>
                                </div>
                                <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )


}