import { useTableQuery } from "@/provider/TableQueryProvider";

const TablePagination = () => {
  const {
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    limit,
    setPage,
    setLimit,
  } = useTableQuery();
  const PER_PAGE_OPTIONS = [5, 10, 20, 30, 50];
  const maxPageDisplay = 5; // Giới hạn số trang hiển thị

  const renderPageNumbers = () => {
    let pages = [];
    let startPage = Math.max(currentPage - Math.floor(maxPageDisplay / 2), 1);
    let endPage = Math.min(startPage + maxPageDisplay - 1, totalPages);

    if (endPage - startPage + 1 < maxPageDisplay) {
      startPage = Math.max(endPage - maxPageDisplay + 1, 1);
    }

    // Luôn hiển thị trang đầu tiên
    pages.push(
      <button
        key={1}
        className={`btn ${currentPage === 1 ? "active" : ""}`}
        disabled={currentPage === 1}
        onClick={() => setPage(1)}
      >
        1
      </button>
    );

    // Dấu "..." nếu cần giữa các trang
    if (startPage > 2) {
      pages.push(
        <button key="middle-ellipsis" className="btn disabled" disabled>
          ...
        </button>
      );
    }

    // Tạo các nút số trang ở giữa, không bao gồm trang đầu và cuối
    for (
      let i = Math.max(startPage, 2);
      i < Math.min(endPage, totalPages);
      i++
    ) {
      pages.push(
        <button
          key={i}
          className={`btn ${i === currentPage ? "active" : ""}`}
          disabled={i === currentPage}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }

    // Dấu "..." nếu cần trước trang cuối cùng
    if (endPage < totalPages - 1) {
      pages.push(
        <button key="end-ellipsis" className="btn disabled" disabled>
          ...
        </button>
      );
    }

    // Luôn hiển thị trang cuối cùng
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          className={`btn ${currentPage === totalPages ? "active" : ""}`}
          disabled={currentPage === totalPages}
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  const onChangeLimit = (e) => {
    setLimit(parseInt(e.target.value));
  };

  return (
    <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
      <div className="flex items-center gap-2 order-2 md:order-1">
        Show
        <select
          className="select select-sm w-16"
          name="perpage"
          onChange={onChangeLimit}
        >
          {PER_PAGE_OPTIONS.map((option) => (
            <option key={option} value={option} selected={option === limit}>
              {option}
            </option>
          ))}
        </select>
        per page
      </div>

      <div className="flex items-center gap-4 order-1 md:order-2">
        {/* <span>1-5 of 33</span> */}
        <div className="pagination">
          <div className="pagination">
            {/* Nút Previous */}
            <button
              className={`btn ${!hasPrevPage ? "disabled" : ""}`}
              disabled={!hasPrevPage}
              onClick={() => setPage(currentPage - 1)}
            >
              <i className="ki-outline ki-black-left" />
            </button>

            {renderPageNumbers()}

            <button
              className={`btn ${!hasNextPage ? "disabled" : ""}`}
              disabled={!hasNextPage}
              onClick={() => setPage(currentPage + 1)}
            >
              <i className="ki-outline ki-black-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
