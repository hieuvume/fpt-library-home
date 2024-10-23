import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

// Định nghĩa giao diện cho phân trang kèm theo filters
interface PaginationContextType<T> {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  setFilters: (filters: Record<string, any>) => void;
  data: T[] | undefined;
  error: any;
  isLoading: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationContext = createContext<PaginationContextType<any> | undefined>(undefined);

export function usePagination<T = any>() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context as PaginationContextType<T>;
}

// Tạo Provider cho Pagination với filter
interface PaginationProviderProps<T> {
  children: ReactNode;
  requestKey: string;
  fetcher: (url: string) => Promise<T>;
  limit: number;
  initialFilters?: Record<string, any>;
}

export const PaginationProvider: React.FC<PaginationProviderProps<any>> = ({
  children,
  initialFilters = {},
  requestKey,
  fetcher,
  limit,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  // Lấy các query params từ URL khi trang được tải
  useEffect(() => {
    const queryPage = Number(router.query.page) || 1;
    const queryLimit = Number(router.query.limit) || limit;
    
    // Chỉ cập nhật nếu giá trị thay đổi
    if (queryPage !== currentPage) {
      setCurrentPage(queryPage);
    }

    if (queryLimit !== limit) {
      setFilters({
        ...filters,
        ...router.query,
      });
    }
  }, [router.query]); // Chỉ chạy khi router.query thay đổi

  // Tạo query string từ các filters và trang hiện tại
  const queryParams = new URLSearchParams({
    page: String(currentPage),
    limit: String(limit),
    ...filters,
  }).toString();

  const url = `${requestKey}?${queryParams}`;

  const { data, error } = useSWR(router.isReady ? url : null, () => fetcher(queryParams), {
    onSuccess: (data) => {
      setTotalPages(data.totalPages || 1);
      setHasNextPage(data.hasNextPage || false);
      setHasPrevPage(data.hasPrevPage || false);
    },
    keepPreviousData: true,
  });

  // Cập nhật URL khi `currentPage` hoặc `filters` thay đổi
  useEffect(() => {
    const currentQuery = {
      ...router.query,
      page: String(currentPage),
      limit: String(limit),
      ...filters,
    };

    // So sánh nếu query hiện tại và query mới khác nhau, thì mới push
    if (
      router.query.page !== currentQuery.page ||
      router.query.limit !== currentQuery.limit ||
      JSON.stringify(filters) !== JSON.stringify(currentQuery)
    ) {
      router.push(
        {
          pathname: router.pathname,
          query: currentQuery,
        },
        undefined,
        { shallow: true } // Sử dụng `shallow` để thay đổi URL mà không tải lại trang
      );
    }
  }, [currentPage, filters]); // Chỉ chạy khi currentPage hoặc filters thay đổi

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        setPage,
        setFilters,
        data: data ? data.docs : undefined,
        error,
        isLoading: !error && !data,
        hasNextPage,
        hasPrevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};