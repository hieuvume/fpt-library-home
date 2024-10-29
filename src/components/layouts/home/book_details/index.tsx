import type { BookDetails } from "@/models/book";
import Image from "next/image";
import FeedbackDetails from "../feedback";
import ModelDetails from "../model_details";
import useAuth from "@/hooks/useAuth";
import ModelBorrow from "../model_borrow";
import useSWR from "swr";
import { bookApi } from "@/api/book";


export default function BookDetails({ children }: { children: BookDetails[] }) {
    const { data, isLoading, error } = useSWR(`books/${children.map(data => data.bookTitleId)}/availability-info`, () =>
        bookApi.getEarLiestFreeTime(children[0].bookTitleId))
    console.log(data?.earliestFreeTime)

    const { isAuthenticated, user } = useAuth()
    return (

        <>
            <div className="card">
                <div className="card-header" id="advanced_settings_appearance">
                    <h1 className="card-title">Details Book</h1>
                </div>
                <div className="card-body lg:py-7.5">
                    <div className="mb-5">
                        <h2 className="text-md font-medium text-gray-900">Book Title</h2>
                        <span className="text-1sm text-gray-700">
                            {children?.map((data) => data.title)}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7.5 ">
                        <div className="">
                            <label
                                className="form-label max-w-48 text-gray-800 font-normal"

                            >
                                <Image
                                    width={2200}
                                    height={120}
                                    alt="Book Cover"
                                    className="rounded-lg max-h-[270px] max-w-full "
                                    src={children[0]?.cover_image}
                                />
                            </label>
                            <span className="text-sm font-medium text-gray-900">Img</span>
                        </div>

                    </div>
                    <div className="border-t border-gray-200 mt-7 mb-8"></div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            ISBN
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            <span className="form-info text-gray-800 font-normal">
                                {children.map((data) => data.ISBN)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Price
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            <span className="form-info text-gray-800 font-normal">
                                {children.map((data) => data.price)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Categories
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            {
                                children.map((data) => data?.categories.map((category, index) => (
                                    <span className="form-info text-gray-800 font-normal" key={index}>
                                        {category.title}
                                    </span>
                                )))
                            }
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Author
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            {
                                children.map((data) => (data.author.map((author, index) => (
                                    <button className="form-info text-gray-800 font-normal  hover:text-primary text-gray-900" key={index}>
                                        {author}
                                    </button>
                                ))))
                            }
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-primary">Save Changes</button>
                    </div>

                </div>

            </div>
            <div className="card">
                <div className="card-header" id="advanced_settings_appearance">
                    <h1 className="card-title">Register to borrow</h1>
                </div>
                <div className="card-body lg:py-7.5">
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Total number of copies
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            <span className="form-info text-gray-800 font-normal">
                                {children.map((data) => data.totalCount)}
                            </span>
                            <button className="form-info text-gray-800 font-normal  hover:text-primary text-gray-900" data-modal-toggle="#auth-modal">Detail</button>
                            <ModelDetails children={children} />
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Number of copies available for loan
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            <span className="form-info text-gray-800 font-normal">
                                {children.map((data) => data.availableCount)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-8">
                        <label className="form-label max-w-48 text-gray-800 font-normal">
                            Number of readers currently borrowing
                        </label>

                        <div className="flex items-center gap-7.5 grow">
                            <span className="form-info text-gray-800 font-normal">
                                {children.map((data) => data.borrowedCount)}
                            </span>
                            <button className="form-info text-gray-800 font-normal  hover:text-primary text-gray-900" data-modal-toggle="#brorrow">Book loan</button>
                            <ModelBorrow children={data} bookTitleId={children[0].bookTitleId}/>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}