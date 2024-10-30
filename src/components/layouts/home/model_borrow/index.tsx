import { bookApi } from "@/api/book";
import { BaseModal } from "@/components/modal/BaseModal";
import { formatDateTime } from "@/utils";
import { Report } from "notiflix";
interface Props {
    children: any;
    bookTitleId: string;
}

export default function ModelBorrow({ children, bookTitleId }: Props) {
    const handleBorrow = () => {
        bookApi.borrowBook({ bookTitleId: bookTitleId }).then((data) => {
            console.log(data)
            try {
                if (data.status == 200) {
                    Report.success("Success", "Borrow book successfully!", "OK", () => {
                        location.reload()
                    });
                }
            } catch (e) {
                Report.failure("Error", `Borrow book ${e} `, "OK", () => {
                    location.reload()
                });
            }


        });
    }
    return (
        <>
            <BaseModal modalKey={"brorrow"} title="Brorrow Book">
                <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                    <label className="form-label max-w-48 text-gray-800 font-normal">
                        Library
                    </label>

                    <div className="flex items-center gap-7.5 grow">
                        <span className="form-info text-gray-800 font-normal">
                            Readora
                        </span>
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                    <label className="form-label max-w-48 text-gray-800 font-normal">
                        Earliest free time
                    </label>

                    <div className="flex items-center gap-7.5 grow">
                        <span className="form-info text-gray-800 font-normal">
                            {formatDateTime(children?.earliestFreeTime)}
                        </span>
                    </div>
                </div>
                <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                    <label className="form-label max-w-48 text-gray-800 font-normal">
                        Number of readers who are ordering
                    </label>

                    <div className="flex items-center gap-7.5 grow">
                        <span className="form-info text-gray-800 font-normal">
                            {(children?.activeOrderCount)}
                        </span>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={handleBorrow}>Borrow</button>
            </BaseModal>
        </>
    )
}