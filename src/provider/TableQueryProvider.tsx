import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

// Định nghĩa giao diện cho phân trang kèm theo filters và sort
interface TableQueryContextType<T> {
  currentPage: number;
  totalPages: number;
  limit: number;
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
  setFilters: (filters: Record<string, any>) => void;
  setSort: (sortField: string, sortOrder: "asc" | "desc") => void;
  removeSort: () => void;
  data: T[] | undefined;
  error: any;
  isLoading: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  sort: { field: string; order: "asc" | "desc" } | undefined;
}

const TableQueryContext = createContext<TableQueryContextType<any> | undefined>(
  undefined
);

export function useTableQuery<T = any>() {
  const context = useContext(TableQueryContext);
  if (!context) {
    throw new Error("useTableQuery must be used within a TableQueryProvider");
  }
  return context as TableQueryContextType<T>;
}

// Tạo Provider cho TableQuery với filter và sort
interface TableQueryProviderProps<T> {
  children: ReactNode;
  requestKey: string;
  fetcher: (url: string) => Promise<T>;
  limit: number;
  setLimit?: (limit: number) => void;
  initialFilters?: Record<string, any>;
}

export const TableQueryProvider: React.FC<TableQueryProviderProps<any>> = ({
  children,
  initialFilters = {},
  requestKey,
  fetcher,
  limit: defaultLimit = 5,
}) => {
  const router = useRouter();
  const [limit, setLimit] = useState<number>(defaultLimit);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters);
  const [sort, setSortState] = useState<
    { field: string; order: "asc" | "desc" } | undefined
  >(undefined);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  // Tạo query string từ các filters, sort, và trang hiện tại
  const queryParams = new URLSearchParams({
    page: String(currentPage),
    limit: String(limit),
    ...filters,
    ...(sort ? { sort: sort.field, order: sort.order } : {}), // Thêm sort nếu có
  }).toString();

  const url = `${requestKey}?${queryParams}`;

  const { data, error } = useSWR(
    router.isReady ? url : null,
    () => fetcher(queryParams),
    {
      onSuccess: (data) => {
        setTotalPages(data.totalPages || 1);
        setHasNextPage(data.hasNextPage || false);
        setHasPrevPage(data.hasPrevPage || false);
      },
      keepPreviousData: true,
      revalidateOnFocus: false,
    }
  );

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const setSort = (sortField: string, sortOrder: "asc" | "desc") => {
    setSortState({ field: sortField, order: sortOrder });
  };

  const removeSort = () => {
    setSortState(undefined);
  };

  return (
    <TableQueryContext.Provider
      value={{
        currentPage,
        totalPages,
        setPage,
        setFilters,
        setSort,
        removeSort,
        data: data ? data.docs : undefined,
        error,
        isLoading: !error && !data,
        hasNextPage,
        hasPrevPage,
        sort,
        limit,
        setLimit,
      }}
    >
      {children}
    </TableQueryContext.Provider>
  );
};
