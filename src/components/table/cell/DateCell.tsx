import { formatDateTime } from "@/utils";

const DateCell = ({ value }: { value: string }) => {
  return <span className="text-gray-800 font-normal">{formatDateTime(value)}</span>;
};

export default DateCell;
