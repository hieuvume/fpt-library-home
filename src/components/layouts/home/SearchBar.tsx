import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword.trim()) {
            router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <div className="relative w-full lg:mt-[-2.5rem]">
            <div
                className="bg-cover bg-center py-20"
                style={{ backgroundImage: 'url(/media/background.png)' }}
            >
                <div className="max-w-4xl mx-auto text-center text-white px-4 md:px-0">
                    <h2 className="text-3xl font-semibold mb-4">Find Your Next Book</h2>
                    <form className="max-w-2xl mx-auto" onSubmit={handleSearch}>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 border-none dark:text-dark focus:outline-none"
                                placeholder="Search Book Name, Author..."
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn-dark text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;