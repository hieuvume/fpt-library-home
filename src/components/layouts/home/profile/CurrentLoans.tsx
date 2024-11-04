import { userApi } from "@/api/user";
import { BorrowRecord } from "@/models/borrow-record";
import { formatDateShort } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const LoanItem = ({ record }: { record: BorrowRecord }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center grow gap-2.5">
        {/* <img src="/media/file-types/pdf.svg" /> */}
        <Image
          width={80}
          height={80}
          className="max-w-6"
          alt="book"
          src={record.book_title.cover_image}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">
            {record.book_title.title.slice(0, 35)}...
          </span>
          <span className="text-xs text-gray-700">
            Due at {formatDateShort(record.due_date)}
          </span>
        </div>
      </div>
    </div>
  );
};

const CurrentLoans = () => {
  const { data } = useSWR("/borrowing-records/current-loans", () =>
    userApi.getCurrentLoans()
  );

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Current Borrows</h3>
      </div>
      <div className="card-body">
        <div className="grid gap-2.5 lg:gap-5">
          {data?.map((item, index) => (
            <LoanItem key={index} record={item} />
          ))}
        </div>
      </div>
      <div className="card-footer justify-center">
        <Link className="btn btn-link" href="/borrows">
          All Borrows
        </Link>
      </div>
    </div>
  );
};

export default CurrentLoans;
