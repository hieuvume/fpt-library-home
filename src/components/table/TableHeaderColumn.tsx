import { ColumnInstance } from 'react-table'

type Props<T extends object> = {
  column: ColumnInstance<T>
}

function TableHeaderColumn<T extends object>({ column }: Props<T>) {
  return (
    <>
      {column.Header && typeof column.Header === 'string' ? (
        <th className='text-left rtl:text-right whitespace-nowrap px-3 py-3.5 text-gray-900 dark:text-white font-semibold text-sm' {...column.getHeaderProps()}>{column.render('Header')}</th>
      ) : (
        column.render('Header')
      )}
    </>
  )
}
export { TableHeaderColumn }
