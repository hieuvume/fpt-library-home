
import { bookTitleApi } from "@/api/book-title";
import { borrowRecordDashboardApi } from "@/api/borrow-record";
import { BookTitle } from "@/models/book-title";
import { BorrowRecord, dashboardBorrowRecord } from "@/models/borrow-record";
import { capitalize } from "@/utils";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import useSWR from "swr";
import Approve from "./approved";

export default function DetailBookLoans({ BorrowRecord }: { BorrowRecord: dashboardBorrowRecord }) {
 
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
            <div className="col-span-1">
                <div className="grid gap-5 lg:gap-7.5">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">User Borrow Book</h3>
                        </div>
                        <div className="card-body pt-5 pb-5">
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">Email</td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">Full Name:</td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.full_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">Phone Number:</td>
                                        <td className="text-sm text-gray-900 pb-3.5">
                                            {BorrowRecord?.user?.phone_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">
                                            Addrees:
                                        </td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.address}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">
                                            Citizen identification number:
                                        </td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.id_card?.id_number}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">
                                            Card Number:
                                        </td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.current_membership?.card_number}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-sm text-gray-600 pb-3.5 pe-3">
                                            Membership Package
                                        </td>
                                        <td className="text-sm text-gray-900 pb-3.5">{BorrowRecord?.user?.current_membership?.membership?.name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col gap-5 lg:gap-7.5">
                    <div className="flex flex-col gap-5 lg:gap-7.5">
                        <div className="card">
                            <div className="card-body px-10 py-7.5 lg:pe-12.5">
                                <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-1.5xl font-semibold text-gray-900">
                                            {String(BorrowRecord?.book_title?.title)}
                                        </h2>
                                        <p className="text-sm text-gray-700 leading-5.5">
                                            {String(BorrowRecord?.book_title?.description).split(' ').slice(0, 20).join(' ')}...
                                        </p>
                                        <div>
                                            {Array.isArray(BorrowRecord?.book_title?.author) ? (
                                                BorrowRecord.book_title.author.map((author: string, index: number) => (
                                                    <p
                                                        key={index}
                                                        className="badge badge-xs badge-outline badge-primary me-2"
                                                    >
                                                        {author}
                                                    </p>
                                                ))
                                            ) : (
                                                <p className="badge badge-xs badge-outline badge-primary me-2">
                                                    {String(BorrowRecord?.book_title?.author)}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <img
                                        alt="image"
                                        className="dark:hidden max-h-[160px] rounded-lg"
                                        src={BorrowRecord?.book_title?.cover_image}
                                    />
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="card-footer justify-center">
                                <button 
                                 data-modal-toggle="#approve"
                                    className="btn btn-link hover:text-teal-500"
                                >
                                    Approved
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}