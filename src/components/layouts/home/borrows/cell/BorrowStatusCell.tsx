import { capitalize } from "@/utils";

const BorrowStatusCell = ({ value }: { value: string }) => {
  const color = {
    pending: "warning",
    hold: "warning",
    rejected: "danger",
    canceled: "danger",
    borrowing: "info",
    returned: "success",
    losted: "secondary",
  };
  return (
    <div
      className={`badge badge-sm badge-outline badge-${
        color[value] || "secondary"
      }`}
    >
      {capitalize(value)}
    </div>
  );
};

export default BorrowStatusCell;
