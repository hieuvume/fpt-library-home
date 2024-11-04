import { BorrowRecord } from "@/models/borrow-record";
import { useObjectData } from "@/provider/ObjectDataProvider";

const BorrowActionCell = ({ row }: { row: { original: BorrowRecord } }) => {
  const { setData } = useObjectData<BorrowRecord>();

  const handleAction = () => {
    setData(row.original);
  };

  return (
    <div
      className="btn btn-sm btn-icon btn-clear btn-primary"
      onClick={handleAction}
      data-modal-toggle="#borrow-guide"
    >
      <i className="ki-filled ki-information"></i>
    </div>
  );
};

export default BorrowActionCell;
