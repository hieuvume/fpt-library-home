import { bookDashboardApi } from '@/api/book';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const BookList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, isLoading } = useSWR(`dashboard/books/${page}/${pageSize}`, () => bookDashboardApi.getBooks(page, pageSize));
  const { books, totalBook } = data || {};

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <div className="lg:col-span-2">
      <div className="grid">
        <div className="card card-grid h-full min-w-full">
          <div className="card-header">
            <h3 className="card-title">Books</h3>
            <div className="input input-sm max-w-48">
              <i className="ki-filled ki-magnifier" />
              <input placeholder="Search Books" type="text" />
            </div>
          </div>
          <div className="card-body">
            {isLoading ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2 px-4 py-2 font-medium leading-none text-2sm border border-gray-200 shadow-default rounded-md text-gray-500 bg-light">
                  <svg className="animate-spin -ml-1 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </div>
              </div>
            ) : (
              <div className="scrollable-x-auto">
                <table className="table table-border">
                  <thead>
                    <tr>
                      <th className="w-[60px]">
                        <input className="checkbox checkbox-sm" type="checkbox" />
                      </th>
                      <th className="min-w-[280px]">Title</th>
                      <th className="min-w-[135px]">Section</th>
                      <th className="min-w-[135px]">Shelf</th>
                      <th className="min-w-[135px]">Floor</th>
                      <th className="min-w-[135px]">Position</th>
                      <th className="min-w-[135px]">Status</th>
                      <th className="min-w-[135px]">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book: any) => (
                      <tr key={book.uniqueId}>
                        <td>
                          <input className="checkbox checkbox-sm" type="checkbox" value={book.uniqueId} />
                        </td>
                        <td>{book.book_title}</td>
                        <td>{book.section}</td>
                        <td>{book.shelf}</td>
                        <td>{book.floor}</td>
                        <td>{book.position}</td>
                        <td>{book.status}</td>
                        <td>{new Date(book.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
            <div className="flex items-center gap-2">
              Show
              <select
                className="select select-sm w-16"
                value={pageSize}
                onChange={handlePageSizeChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
              per page
            </div>
            <div className="flex items-center gap-4">
              <span>{`1-${pageSize} of ${totalBook}`}</span>
              <div className="pagination">
                <button
                  className="btn"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>
                <button className="btn">{page}</button>
                <button
                  className="btn"
                  disabled={page * pageSize >= totalBook}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
