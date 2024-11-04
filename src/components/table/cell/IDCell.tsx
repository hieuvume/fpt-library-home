import { formatDateTime } from "@/utils";

const IDCell = ({ value }: { value: string }) => {
  return <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value={value} />;
};

export default IDCell;
