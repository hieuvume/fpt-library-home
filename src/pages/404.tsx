import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[95%]">
            <div className="mb-10">
                <Image
                    width={160}
                    height={160}
                    alt="image"
                    className="dark:hidden max-h-[160px]"
                    src="/media/illustrations/19.svg"
                />
                <Image
                    width={160}
                    height={160}
                    alt="image"
                    className="light:hidden max-h-[160px]"
                    src="/media/illustrations/19-dark.svg"
                />
            </div>
            <span className="badge badge-primary badge-outline mb-3">404 Error</span>
            <h3 className="text-2.5xl font-semibold text-gray-900 text-center mb-2">
                We have lost this page
            </h3>
            <div className="text-md text-center text-gray-700 mb-10">
                The requested page is missing. Check the URL or {" "}
                <Link
                    className="text-primary font-medium hover:text-primary-active"
                    href="/"
                >
                    Return Home
                </Link>
                .
            </div>
        </div>

    )
}

export default NotFoundPage