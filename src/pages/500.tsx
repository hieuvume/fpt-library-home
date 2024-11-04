import Link from "next/link";

const InternalServerErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center grow h-full">
      <div className="flex flex-col items-center">
        <div className="mb-16">
          <img
            alt="image"
            className="dark:hidden max-h-[160px]"
            src="/media/illustrations/20.svg"
          />
          <img
            alt="image"
            className="light:hidden max-h-[160px]"
            src="/media/illustrations/20-dark.svg"
          />
        </div>
        <span className="badge badge-primary badge-outline mb-3">
          500 Error
        </span>
        <h3 className="text-2.5xl font-semibold text-gray-900 text-center mb-2">
          Internal Server Error
        </h3>
        <div className="text-md text-center text-gray-700 mb-10">
          Server error occurred. Please try again later or
          <a
            className="text-primary font-medium hover:text-primary-active"
            href="#"
          >
            Contact Us
          </a>
          for assistance.
        </div>
        <Link className="btn btn-primary flex justify-center" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InternalServerErrorPage;
