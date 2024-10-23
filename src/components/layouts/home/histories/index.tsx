import userApi from "@/api/user"
import { useState } from "react";
import useSWR from "swr"

export default function History() {
    const [page, setPage] = useState(1);
    const limit = 5;

    const { data, error, isLoading } = useSWR(
        [`/borrow-records/histories?page=${page}&limit=${limit}`, page],
        () => userApi.histories(page, limit)
    );
    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Error loading histories: {error.message}</p>;

    if (!data || data?.data?.length === 0) return <p>No history books found</p>;

    const handleNextPage = () => {
        if (page < data.totalPages) setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };


    return (
        <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-5 lg:gap-7.5">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">History Books</h3>
                        <a
                            className="btn btn-link"
                            href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                        >
                            View All
                        </a>
                    </div>
                    <div className="card-body pb-7">
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Borrow Date</th>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Due Date</th>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Return Date</th>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Book Title</th>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Librarian</th>
                                        <th className="px-4 py-2 text-left text-gray-600 text-xs uppercase border-b">Categories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map((history, index) => (
                                        <tr key={index} className="border-l-2 border-brand">
                                            <td className="px-4 py-2 text-2xs text-gray-600">{new Date(history?.borrowDate).toLocaleDateString()}</td>

                                            <td className="px-4 py-2 text-2xs text-gray-600">{new Date(history?.dueDate).toLocaleDateString()}</td>

                                            <td className="px-4 py-2 text-2xs text-gray-600">
                                                {history?.returnDate ? new Date(history?.returnDate).toLocaleDateString() : "Not returned yet"}
                                            </td>

                                            <td className="px-4 py-2 text-2xs text-gray-600">{history?.book?.title}</td>

                                            <td className="px-4 py-2 text-2xs text-gray-600">
                                                <div>{history?.book?.librarian?.name}</div>
                                                <div className="text-gray-500 text-xs">{history?.book?.librarian?.email}</div>
                                                <div className="text-gray-500 text-xs">{history?.book?.librarian?.phone}</div>
                                            </td>

                                            <td className="px-4 py-2 text-2xs text-gray-600">
                                                {history.book.categories.join(", ")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer flex justify-between">
                        <button onClick={handlePrevPage} disabled={page === 1} className="btn btn-link">Previous</button>
                        <span>Page {page} of {data.totalPages}</span>
                        <button onClick={handleNextPage} disabled={page === data.totalPages} className="btn btn-link">Next</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Activity</h3>
                        <div className="flex items-center gap-2">
                            <label className="switch">
                                <span className="switch-label">
                                    Auto refresh:
                                    <span className="switch-on:hidden">Off</span>
                                    <span className="hidden switch-on:inline">On</span>
                                </span>
                                <input
                                    defaultChecked
                                    name="check"
                                    type="checkbox"
                                    defaultValue={1}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="flex flex-col">
                            <div className="flex items-start relative">
                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-people text-base"></i>
                                </div>
                                <div className="pl-2.5 mb-7 text-md grow">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-800">
                                            Posted a new article
                                            <a
                                                className="text-sm font-medium link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                            >
                                                Top 10 Tech Trends
                                            </a>
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            Today, 9:00 AM
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start relative">
                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-entrance-left text-base"></i>
                                </div>
                                <div className="pl-2.5 mb-7 text-md grow">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-800">
                                            I had the privilege of interviewing an industry expert
                                            for an
                                            <a
                                                className="text-sm link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                            >
                                                upcoming blog post
                                            </a>
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            2 days ago, 4:07 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start relative">
                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-share text-base"></i>
                                </div>
                                <div className="pl-2.5 mb-7 text-md grow">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-800">
                                            I couldn't resist sharing a sneak peek of our
                                            <a
                                                className="text-sm link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/blogger"
                                            >
                                                upcoming content
                                            </a>
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            5 days ago, 4:07 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start relative">
                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-directbox-default text-base"></i>
                                </div>
                                <div className="pl-2.5 mb-7 text-md grow">
                                    <div className="flex flex-col pb-2.5">
                                        <span className="text-sm text-gray-800">
                                            Attending the virtual blogging conference was an
                                            enriching experience
                                        </span>
                                        <span className="text-xs text-gray-600">
                                            2 days ago, 4:07 PM
                                        </span>
                                    </div>
                                    <div className="card shadow-none">
                                        <div className="card-body lg:py-4">
                                            <div className="flex justify-center py-4">
                                                <img
                                                    alt="image"
                                                    className="dark:hidden max-h-[160px]"
                                                    src="/static/metronic/tailwind/dist/assets/media/illustrations/3.svg"
                                                />
                                                <img
                                                    alt="image"
                                                    className="light:hidden max-h-[160px]"
                                                    src="/static/metronic/tailwind/dist/assets/media/illustrations/3-dark.svg"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-md font-medium text-gray-900 text-center">
                                                    Blogging Conference
                                                </div>
                                                <div className="flex items-center justify-center gap-1">
                                                    <a
                                                        className="text-2sm font-semibold link"
                                                        href="/metronic/tailwind/demo9/public-profile/profiles/company"
                                                    >
                                                        Axio new release
                                                    </a>
                                                    <span className="text-2sm text-gray-700 mr-2">
                                                        email campaign
                                                    </span>
                                                    <span className="badge badge-sm badge-success badge-outline">
                                                        Public
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start relative">
                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"></div>
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-coffee text-base"></i>
                                </div>
                                <div className="pl-2.5 mb-7 text-md grow">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-900">
                                            Reaching the milestone of
                                            <a
                                                className="text-sm font-medium link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/feeds"
                                            >
                                                10,000 followers
                                            </a>
                                            on the blog was a dream come true
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            5 days ago, 4:07 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start relative">
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-300 size-9 text-gray-600">
                                    <i className="ki-filled ki-cup text-base"></i>
                                </div>
                                <div className="pl-2.5 text-md grow">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-gray-800">
                                            We recently
                                            <a
                                                className="text-sm font-medium link"
                                                href="/metronic/tailwind/demo9/public-profile/profiles/nft"
                                            >
                                                celebrated
                                            </a>
                                            the blog's 1-year anniversary
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            3 months ago, 4:07 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer justify-center">
                        <a
                            className="btn btn-link"
                            href="/metronic/tailwind/demo9/public-profile/activity"
                        >
                            All-time Activities
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}