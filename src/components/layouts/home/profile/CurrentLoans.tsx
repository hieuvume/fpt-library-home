import { userApi } from "@/api/user";
import { BorrowRecord } from "@/models/borrow-record";
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
            4.7 MB 26 Sep 2024 3:20 PM
          </span>
        </div>
      </div>
      <div className="menu" data-menu="true">
        <div
          className="menu-item menu-item-dropdown"
          data-menu-item-offset="0, 10px"
          data-menu-item-placement="bottom-end"
          data-menu-item-toggle="dropdown"
          data-menu-item-trigger="click|lg:click"
        >
          <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
            <i className="ki-filled ki-dots-vertical"></i>
          </button>
          <div
            className="menu-dropdown menu-default w-full max-w-[175px]"
            data-menu-dismiss="true"
          >
            <div className="menu-item">
              <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-document"></i>
                </span>
                <span className="menu-title">Details</span>
              </a>
            </div>
            <div className="menu-item">
              <a
                className="menu-link"
                data-modal-toggle="#share_profile_modal"
                href="#"
              >
                <span className="menu-icon">
                  <i className="ki-filled ki-share"></i>
                </span>
                <span className="menu-title">Share</span>
              </a>
            </div>
            <div className="menu-item">
              <a className="menu-link" href="#">
                <span className="menu-icon">
                  <i className="ki-filled ki-file-up"></i>
                </span>
                <span className="menu-title">Export</span>
              </a>
            </div>
          </div>
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
        <h3 className="card-title">Current Loans</h3>
      </div>
      <div className="card-body">
        <div className="grid gap-2.5 lg:gap-5">
          {data?.map((item, index) => (
            <LoanItem key={index} record={item} />
          ))}
        </div>
      </div>
      <div className="card-footer justify-center">
        <Link
          className="btn btn-link"
          href="/user/loans"
        >
          All Loans
        </Link>
      </div>
    </div>
  );
};

export default CurrentLoans;
