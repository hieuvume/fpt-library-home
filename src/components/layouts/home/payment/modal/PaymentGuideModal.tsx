import { paymentApi } from "@/api/payment";
import { BaseModal } from "@/components/modal/BaseModal";
import { Payment } from "@/models/payment";
import { useObjectData } from "@/provider/ObjectDataProvider";
import useSWR from "swr";
import BankingPaymentGuide from "./BankingPaymentGuide";
import CashPaymentGuide from "./CashPaymentGuide";
import MomoPaymentGuide from "./MomoPaymentGuide";

const PaymentGuideModal = () => {
    const { data: paymentId } = useObjectData<string>();

    const { data, isLoading, error } = useSWR<Payment>(paymentId ? `/payments/${paymentId}` : null, () => paymentApi.getPayment(paymentId), {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
    });

    const getTitle = () => {
        switch (data?.payment_method) {
            case "cash":
                return "Cash payment guide";
            case "banking":
                return "Banking payment guide";
            case "momo":
                return "Momo payment guide";
            default:
                return "Payment guide";
        }
    }

    const isCash = data?.payment_method === "cash";
    const isBanking = data?.payment_method === "banking";
    const isMomo = data?.payment_method === "momo";

    return (
        <BaseModal modalKey={"payment-guide"} title={getTitle()}>
            {data?.payment_status === 'pending' && (
                <>
                    {isBanking && <BankingPaymentGuide payment={data} />}
                    {isMomo && <MomoPaymentGuide payment={data} />}
                    {isCash && (<CashPaymentGuide payment={data} />)}
                </>
            )}
            {data?.payment_status === 'completed' && (
                <div className="grid gap-5 mb-2">
                    <div className="flex flex-col">
                        <label className="text-gray-900 font-semibold text-base text-center">Payment has been completed</label>
                        <div className="text-2sm font-medium text-gray-800 p-2 text-center">
                            Thank you for your payment. Your account has been upgraded/extended successfully.
                        </div>
                    </div>
                </div>
            )}
            {data?.payment_status === 'failed' && (
                <div className="grid gap-5 mb-2">
                    <div className="flex flex-col">
                        <label className="text-gray-900 font-semibold text-base text-center">Payment has failed</label>
                        <div className="text-2sm font-medium text-gray-800 p-2 text-center">
                            We are sorry that your payment has failed. Please try again later.
                        </div>
                    </div>
                </div>
            )}
        </BaseModal>
    )
}

export default PaymentGuideModal