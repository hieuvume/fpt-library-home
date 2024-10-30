import { bookDashboardApi } from "@/api/book";
import { BorrowRecord } from "@/models/borrow-record";
import { useRouter } from "next/router";
import { Report } from "notiflix";

export default function DetailBook({ children }: { children: BorrowRecord }) {
  //approvedBook
  const router = useRouter();
  console.log( children.user._id);
  const handleApprove = async () => {
    try {
      const result = bookDashboardApi.approvedBook({
        borrowId: children._id,
        bookId: children.book._id,
        borrowStatus:'borrowing',
        bookStatus:'borrowing',
        userId: children.user._id
      });
      result.then(() => {
        Report.success('Success', 'Book approved successfully.', 'OK');
        router.push('/dashboard/librarian/loans');
      });
     
    } catch (error) {
      Report.failure('Error', 'Failed to approve book.', 'OK');
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">About</h3>
            </div>
            <div className="card-body pt-4 pb-3">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">Email</td>
                    <td className="text-sm text-gray-900 pb-3.5">{children?.user?.email}</td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">Full Name:</td>
                    <td className="text-sm text-gray-900 pb-3.5">{children?.user?.full_name}</td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">Phone Number:</td>
                    <td className="text-sm text-gray-900 pb-3.5">
                      {children?.user?.phone_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Country:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">Netherlands</td>
                  </tr>
                  <tr>
                    <td className="text-sm text-gray-600 pb-3.5 pe-3">
                      Postcode:
                    </td>
                    <td className="text-sm text-gray-900 pb-3.5">1092 NL</td>
                  </tr>
          
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Skills</h3>
            </div>
            <div className="card-body">
              <div className="flex flex-wrap gap-2.5 mb-2">
                <span className="badge badge-sm badge-gray-200">Web Design</span>
                <span className="badge badge-sm badge-gray-200">Code Review</span>
                <span className="badge badge-sm badge-gray-200">Figma</span>
                <span className="badge badge-sm badge-gray-200">
                  Product Development
                </span>
                <span className="badge badge-sm badge-gray-200">Webflow</span>
                <span className="badge badge-sm badge-gray-200">AI</span>
                <span className="badge badge-sm badge-gray-200">noCode</span>
                <span className="badge badge-sm badge-gray-200">Management</span>
              </div>
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
                      {String(children?.book_title?.title)}
                    </h2>
                    <p className="text-sm text-gray-700 leading-5.5">
                      {String(children?.book_title?.description).split(' ').slice(0, 20).join(' ')}...
                    </p>
                  </div>
                  <img
                    alt="image"
                    className="dark:hidden max-h-[160px] rounded-lg"
                    src={children?.book_title?.cover_image}
                  />

                </div>
              </div>
              <div className="card-footer justify-center">
                <button
                onClick={handleApprove}
                  className="btn btn-link hover:text-teal-500"
                
                >
                  Approved
                </button>
              </div>
              {/* <div className="card-footer justify-center">
                <select className="btn btn-link select-all">
                  <option value="pending" className="text-yellow-500">Pending</option>
                  <option value="holding" className="text-blue-500">Holding</option>
                  <option value="borrowing" className="text-green-500">Borrowing</option>
                  <option value="rejected" className="text-red-500">Rejected</option>
                  <option value="returned" className="text-gray-500">Returned</option>
                  <option value="losted" className="text-black">Losted</option>
                </select>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}