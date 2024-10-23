import { useTableQuery } from "@/provider/TableQueryProvider";
import { FC, useMemo, useState } from "react";

interface Props {
  sortable?: boolean;
  title: string;
  id: string;
  className?: string;
}

const TableHeader: FC<Props> = ({ id, sortable, title, className }) => {
  const { isLoading, sort, setSort, removeSort } = useTableQuery();
  const isSelectedForSorting = useMemo(() => {
    return sort?.field === id;
  }, [id, sort]);

  const currentOrder = useMemo(() => {
    return isSelectedForSorting ? sort?.order : null;
  }, [isSelectedForSorting, sort]);

  const onSortColumn = () => {
    console.log(sort);
    if (!sortable || isLoading) return;

    console.log(id, sort);
    // Nếu cột chưa được chọn để sắp xếp, đặt nó là `asc`
    if (!isSelectedForSorting) {
      setSort(id, "asc");
    } else {
      // Nếu cột đã được chọn, thay đổi giữa `asc`, `desc` và loại bỏ sắp xếp
      if (currentOrder === "asc") {
        setSort(id, "desc");
      } else if (currentOrder === "desc") {
        removeSort(); // Bỏ sắp xếp nếu đã là `desc`
      }
    }
  };

  return (
    <th
      className={`${className || 'min-w-[120px]'} ${sortable ? "cursor-pointer" : ""}`}
      onClick={onSortColumn}
    >
      <span className={`sort ${sort !== undefined ? sort.order : ""}`}>
        <span className="sort-label text-gray-700 font-normal">{title}</span>
        <span className="sort-icon"></span>
      </span>
    </th>
  );
};

export default TableHeader;
