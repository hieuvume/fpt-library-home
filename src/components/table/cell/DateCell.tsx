import { formatDateTime } from "@/utils";

const DateCell = ({ value }: { value: string | null | undefined }) => {
  return (
    <span className="text-gray-800 font-normal">
      {value ? value ? formatDateTime(value) : '' : 'N/A'}
    </span>
  );
};
export default DateCell;
