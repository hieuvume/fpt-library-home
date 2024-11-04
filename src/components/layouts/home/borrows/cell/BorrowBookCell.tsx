import { BookTitle } from "@/models/book-title";
import { BorrowRecord } from "@/models/borrow-record";
import { capitalize } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const BorrowBookCell = ({
  value,
  row,
}: {
  value: BookTitle;
  row: { original: BorrowRecord };
}) => {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <div className="">
          <Image
            width={100}
            height={100}
            className="max-w-8"
            alt="book"
            src={value?.cover_image}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <Link
            className="leading-none font-medium text-gray-900 hover:text-primary"
            href={`/book/${value?._id}`}
          >
            {value?.title}
          </Link>
          <span className="text-xs text-gray-700 font-normal">
            {row?.original?.book?.uniqueId}
          </span>
        </div>
      </div>
    </>
  );
};

export default BorrowBookCell;
