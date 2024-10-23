import { Row } from 'react-table'

type Props<T extends object> = {
  row: Row<T>
}

export default function TableRow<T extends object>({ row }: Props<T>) {
  return (
    <tr>
      {row.cells.map((cell) => {
        return (
          <td
            key={`${cell.column.id}-${row.id}`}
            // className={'whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm'}
          >
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}