import { formatCurrency } from "@/utils";

const CurrencyCell = ({ value }: { value: number }) => {
  return <span className="text-primary fw-semibold">{formatCurrency(value)} đ</span>;
};

export default CurrencyCell;
