import { BaseModal } from "@/components/modal/BaseModal";
import { BookDetails } from "@/models/book";

export default function ModelDetails({ children }: { children: BookDetails[] }) {
    const TotalCopies = children.reduce((total, data) => total + data.availableCount, 0);
    return (
        <BaseModal modalKey={"auth-modal"} title="Detail - Book">

            <div className="card-header">
                <h1 className="card-title">Register to Borrow</h1>
            </div>

            <div className="card-body lg:py-7.5">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Library</th>
                                <th scope="col" className="px-6 py-3">UniqueId</th>
                                <th scope="col" className="px-6 py-3">Shelf</th>
                                <th scope="col" className="px-6 py-3 text-center">Floor</th>
                                <th scope="col" className="px-6 py-3 text-center">Times Borrowed</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children.map((data, index) =>
                                data.copies.map((copy, copyIndex) => (
                                    <tr key={`${index}-${copyIndex}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Readora
                                        </td>
                                        <td className="px-6 py-4">{copy.uniqueId}</td>
                                        <td className="px-6 py-4">{copy.shelf}</td>
                                        <td className="px-6 py-4 text-center">{copy.floor}</td>
                                        <td className="px-6 py-4 text-center">{copy.times_borrowed}</td>

                                        <td className="px-6 py-4">{copy.status}</td>
                                    </tr>
                                ))
                            )}


                        </tbody>
                    </table>
                </div>
            </div>

        </BaseModal>
    );
}
