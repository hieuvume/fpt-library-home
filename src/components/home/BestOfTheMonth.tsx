import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const books = [
    { title: "Book 1", image: "/path-to-image1.jpg" },
    { title: "Book 2", image: "/path-to-image2.jpg" },
    { title: "Book 3", image: "/path-to-image3.jpg" },
    { title: "Book 4", image: "/path-to-image4.jpg" },
    { title: "Book 5", image: "/path-to-image5.jpg" },
  ];

const BestOfTheMonth = () => {
    return (
        <>
            <div className="mb-5 lg:mb-7.5">
                <div className="container-fixed flex items-center justify-between flex-wrap gap-5">
                    <div className="flex flex-col justify-center items-start flex-wrap gap-1 lg:gap-2">
                        <h1 className="font-medium text-xl text-gray-900">Best of the month</h1>
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
                                    <span className="hidden md:inline text-nowrap">
                                        September, 2024
                                    </span>
                                    <span className="inline md:hidden text-nowrap">Sep, 2024</span>
                                    <span className="flex items-center lg:ms-4">
                                        <i className="ki-filled ki-down !text-xs"></i>
                                    </span>
                                </button>
                                <div
                                    className="menu-dropdown w-48 py-2 scrollable-y max-h-[250px]"
                                    style={{}}
                                >
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">January, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">February, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item active">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">March, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">April, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">May, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">June, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">July, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">August, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">September, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">October, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">November, 2024</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="#">
                                            <span className="menu-title">December, 2024</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div className="book-card">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-48 object-cover"
                            />
                            <h3 className="text-center mt-2 font-medium">{book.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default BestOfTheMonth