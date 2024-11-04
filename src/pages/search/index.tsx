import { bookTitleApi } from "@/api/book-title";
import CardPagination from "@/components/pagination/CardPagination";
import BookTitleItem from "@/components/search/BookTitleItem";
// import { useQuery } from "@/hooks/useQuery";
import { BookTitle } from "@/models/book-title";
import {
  TableQueryProvider,
  useTableQuery,
} from "@/provider/TableQueryProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const { data, setFilters } = useTableQuery<BookTitle>();
  const { keyword } = router.query;

  useEffect(() => {
    if (keyword !== undefined) {
      setFilters({
        keyword: keyword as string,
      });
    }
  }, [keyword]);

  return (
    <div className="container-fixed">
      <div className="mb-4">You are looking for: {router.query.keyword}</div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
        <div className="col-span-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Books</h3>
              {/* <a
                className="btn btn-link"
                href="/metronic/tailwind/demo9/public-profile/works"
              >
                View All
              </a> */}
            </div>
            <div className="card-body lg:pt-7 pt-5 pb-2">
              <div className="grid gap-3.5">
                {data?.map((item, index) => (
                  <BookTitleItem key={index} bookTitle={item} />
                ))}
              </div>
            </div>
            <CardPagination />
          </div>
        </div>
        <div className="col-span-1">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">About</h3>
            </div>
            <div className="card-body">
              <p className="text-sm text-gray-800 leading-5.5 mb-4">
                Your go-to platform for easy and efficient book borrowing,
                offering tailored options for both casual readers and Premium
                members. Explore, reserve, and enjoy a seamless reading
                experience with us!
              </p>
              <div className="grid gap-y-3.5">
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-abstract-41 text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Readora
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-crown-2 text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Author
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-sms text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    contact@readora.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-abstract-39 text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    https://readora.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-facebook text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Readora
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="ki-filled ki-youtube text-base text-gray-500"></i>
                  <a
                    className="text-sm leading-none text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    Readora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <TableQueryProvider
      fetcher={bookTitleApi.search}
      requestKey="search"
      limit={10}
    >
      <Search />
    </TableQueryProvider>
  );
};

export default SearchPage;
