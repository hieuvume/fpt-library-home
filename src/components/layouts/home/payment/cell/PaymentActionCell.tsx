import { Payment } from "@/models/payment";
import { useObjectData } from "@/provider/ObjectDataProvider";
import { capitalize } from "@/utils";

const PaymentActionCell = ({ payment }: { payment: Payment }) => {
    const { setData } = useObjectData<string>();

    const handleAction = () => {
        setData(payment._id);
    }

    return (
        <div className="btn btn-sm btn-icon btn-clear btn-primary" onClick={handleAction} data-modal-toggle="#payment-guide">
            <i className="ki-filled ki-two-credit-cart">
            </i>
        </div>
    );
}

export default PaymentActionCell