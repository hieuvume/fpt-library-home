import { useTableQuery } from "@/provider/TableQueryProvider";
import { Column, ColumnInstance, Row, useTable } from "react-table";
import { TableHeaderColumn } from "./TableHeaderColumn";
import TableRow from "./TableRow";

interface TableProps<T extends object> {
  columns: ReadonlyArray<Column<T>>;
}

export default function Table<T extends object>({ columns }: TableProps<T>) {
  const { data, isLoading } = useTableQuery();
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useTable<T>({
      columns: columns,
      data: data || [],
    });

  return (
    <div className="p-0 sm:p-0">
      <div className="relative overflow-x-auto">
        {isLoading && (
          <div className="flex justify-center items-center absolute top-0 left-0 min-w-full min-h-full bg-white/75 dark:bg-gray-800/90 z-10 rounded-lg">
            <span className="icon-[bx--loader-alt] w-6 h-6 text-primary-500 dark:text-primary-400 animate-spin mr-2" />
            <p className="break-words text-sm text-gray-500 dark:text-gray-400 font-semibold">
              Loading...
            </p>
          </div>
        )}
        <table className="table table-auto table-border" {...getTableProps()}>
          <thead>
            <tr>
              {headers.map((column: ColumnInstance<T>) => (
                <TableHeaderColumn<T> key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody
            className="divide-y divide-gray-200 dark:divide-gray-800"
            {...getTableBodyProps()}
          >
            {rows.length > 0 ? (
              rows.map((row: Row<T>, i) => {
                prepareRow(row);
                return <TableRow<T> row={row} key={`row-${i}-${row.id}`} />;
              })
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm"
                >
                  <div className="flex justify-center items-center min-w-full min-h-full bg-white/75 dark:bg-gray-800/90 z-10 rounded-lg">
                    {isLoading ? (
                      <p className="break-words text-sm text-gray-500 dark:text-gray-400 font-semibold"></p>
                    ) : (
                      <>No data found</>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
