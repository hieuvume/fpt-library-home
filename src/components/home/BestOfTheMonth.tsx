import { bookTitleApi } from "@/api/book-title";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";

const BestOfTheMonth = () => {
    const [currentMonth, setCurrentMonth] = useState(dayjs().format("MMMM, YYYY"));
    const [monthsList, setMonthsList] = useState([]);
    const [subMonth, setSubMonth] = useState(0);

    useEffect(() => {
        const generateMonthsList = () => {
            const months = [];
            for (let i = 0; i < 6; i++) {
                const month = dayjs().subtract(i, "month").format("MMMM, YYYY");
                months.push(month);
            }
            setMonthsList(months);
        };
        generateMonthsList();
    }, []);

    const { data, isLoading, error } = useSWR(`book-titles/best-of-the-month/${subMonth}`, () => bookTitleApi.getBestOfTheMonth(subMonth))

    return (
        <>
            <div className="">
                <div className="container-fixed flex items-center justify-between flex-wrap gap-5">
                    <div className="flex flex-col justify-center items-start flex-wrap gap-1 lg:gap-2">
                        <h1 className="font-medium text-2xl text-gray-900">Best of the month</h1>
                    </div>
                    <div className="flex items-center flex-wrap gap-1.5 lg:gap-3.5">
                        <div className="menu menu-default" data-menu="true">
                            <div
                                className="menu-item menu-item-dropdown"
                                data-menu-item-offset="0, 0"
                                data-menu-item-placement="bottom-end"
                                data-menu-item-toggle="dropdown"
                                data-menu-item-trigger="hover"
                            >
                                <button className="menu-toggle btn btn-light btn-sm flex-nowrap">
                                    <span className="flex items-center me-1">
                                        <i className="ki-filled ki-calendar !text-md"></i>
                                    </span>
                                    <span className="hidden md:inline text-nowrap">{currentMonth}</span>
                                    <span className="inline md:hidden text-nowrap">{dayjs().format("MMM, YYYY")}</span>
                                    <span className="flex items-center lg:ms-4">
                                        <i className="ki-filled ki-down !text-xs"></i>
                                    </span>
                                </button>
                                <div className="menu-dropdown w-48 py-2 scrollable-y max-h-[250px]">
                                    {monthsList.map((month, index) => (
                                        <div className="menu-item" key={index}>
                                            <a
                                                className={`menu-link ${month === currentMonth ? "active" : ""}`}
                                                href="#"
                                                onClick={() => {
                                                    setCurrentMonth(month)
                                                    setSubMonth(index)
                                                }}
                                            >
                                                <span className="menu-title">{month}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fixed">
                <div className="flex items-center justify-center flex-col ">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}
                        freeMode={true}
                        autoplay
                        loop
                        modules={[FreeMode]}
                        className="w-full"
                    >
                        {(isLoading || error) && Array.from({ length: 6 }, (_, index) => <SwiperSlide key={index}><SkeletonLoader /></SwiperSlide>)}

                        {(!isLoading && !error) && data?.map((book, index) => (
                            <SwiperSlide key={index} className="mb-10 h-full flex flex-col items-stretch">
                                <div className="flex flex-col items-center bg-white p-2 pb-5 rounded-lg flex-grow h-full hover:shadow-md cursor-pointer">
                                    <Image
                                        width={200}
                                        height={300}
                                        src={book.cover_image}
                                        alt={book.book_title_name}
                                        className="w-full h-52 object-cover mb-4 rounded-lg"
                                    />

                                    <div className="flex flex-col flex-grow justify-between h-full w-full">
                                        <span className="text-sm font-semibold text-slate-900 text-center min-h-[40px] line-clamp-2">
                                            {book.book_title_name}
                                        </span>
                                        <p className="text-sm text-gray-500 mt-2 text-center min-h-[20px] truncate">
                                            By {book.author[0]}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}

const SkeletonLoader = () => {
    return (
        <div className="flex flex-col items-center bg-white p-2 pb-5 rounded-lg flex-grow h-full">
            <div className="animate-pulse w-full h-52 bg-gray-200 rounded-lg mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-5 w-3/4 mx-auto rounded mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mx-auto rounded"></div>
        </div>
    )
}

export default BestOfTheMonth