import { paymentApi } from "@/api/payment"
import { KTModal } from "@/metronic/core"
import { Payment } from "@/models/payment"
import { useTableQuery } from "@/provider/TableQueryProvider"
import { Confirm, Report } from "notiflix"

const CashPaymentGuide = ({ payment }: { payment: Payment }) => {

    const { refresh } = useTableQuery()

    const onCancel = () => {
        Confirm.show(
            "Confirm to cancel payment",
            `Are you sure you want to cancel payment #${payment.transaction_id}?`,
            "Yes",
            "No",
            () => {
                paymentApi.cancelPayment(payment._id).then((res) => {
                    Report.success('Cancel success', 'Cancel order payment successful', "OK")
                    KTModal.closeModal('payment-guide')
                    refresh();
                }).catch((err) => {
                    Report.failure('Cancel failed', err.message ?? 'Has error', "OK")
                });
            }
        );
    }

    return (
        <div className="grid gap-5 mb-2">
            <div className="flex flex-col">
                <label className="text-gray-900 font-semibold text-base text-center">{payment.payment_type === 'upgrade' ? 'Upgrade Your Plan' : 'Extend Your Plan'}</label>
                <div className="flex flex-col gap-2 text-2sm font-medium text-gray-800 p-2">
                    <div>
                        <span className="text-red-500">Step 1:</span> Go to the nearest agent and provide the librarian with your email and transaction id: <b> {payment.transaction_id}</b>.
                    </div>
                    <div>
                        <span className="text-red-500">Step 2:</span> The agent will confirm your payment and provide you with a receipt.
                    </div>
                    <div>
                        <span className="text-red-500">Step 3:</span> Your account will be upgraded/extended within 5 minutes.
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-link text-danger hover:text-danger border-b-red-500" onClick={onCancel}>Cancel payment</button>
                </div>
            </div>
        </div>
    )
}

export default CashPaymentGuide