import { capitalize } from "@/utils";

const PaymentStatusCell = ({ value }: { value: string }) => {
    const color = {
        pending: "warning",
        completed: "success",
        failed: "danger",
    }
    return (
        <div className={`badge badge-sm badge-outline badge-${color[value] || 'secondary'}`}>
            {capitalize(value)}
        </div>
    );
}

export default PaymentStatusCell