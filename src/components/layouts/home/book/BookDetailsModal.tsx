import { DetailModal } from "@/components/modal/DetailModal";
import { BookTitle } from "@/models/book-title";
import { capitalize } from "@/utils";

export default function BookDetailsModal({ book }: { book: BookTitle }) {
  return (
    <DetailModal modalKey={"book-details-modal"} title="Total Copies">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Library
              </th>
              <th scope="col" className="px-6 py-3">
                UniqueId
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Section
              </th>
              <th scope="col" className="px-6 py-3">
                Shelf
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Floor
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {book?.books.map((copy, index) => (
              <tr
                key={`${index}`}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Readora
                </td>
                <td className="px-6 py-4">{copy.uniqueId}</td>
                <td className="px-6 py-4 text-center">{copy.section}</td>
                <td className="px-6 py-4">{copy.shelf}</td>
                <td className="px-6 py-4 text-center">{copy.floor}</td>
                <td className="px-6 py-4 text-center">{copy.position}</td>
                <td className="px-6 py-4">
                  <span
                    className={`badge badge-sm badge-outline badge-${
                      copy.status === "available" ? "success" : "danger"
                    }`}
                  >
                    {capitalize(copy.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DetailModal>
  );
}
