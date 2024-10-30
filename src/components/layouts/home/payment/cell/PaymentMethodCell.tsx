import { capitalize } from "@/utils";

const PaymentMethodCell = ({ value }: { value: string }) => {
    const color = {
        cash: "success",
        banking: "primary",
        momo: "danger"
    }
    const icon = {
        cash: "bill",
        banking: "bank",
        momo: "wallet"
    }
    return (
        <div>
            <i className={`ki-filled ki-${icon[value]} text-${color[value]}`}></i>
            <span className="ml-2">{capitalize(value)}</span>
        </div>
    )
}

export default PaymentMethodCell