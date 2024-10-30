import { paymentApi } from "@/api/payment"
import useSetting from "@/hooks/useSetting"
import { KTModal } from "@/metronic/core"
import { Payment } from "@/models/payment"
import { useTableQuery } from "@/provider/TableQueryProvider"
import { formatCurrency, getBankQRCode } from "@/utils"
import Image from "next/image"
import { Confirm, Report } from "notiflix"

const BankingPaymentGuide = ({ payment }: { payment: Payment }) => {
    const { setting } = useSetting()
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
                <div className="text-2sm font-medium text-center text-gray-800 p-2">
                    Please check the information below and scan the QR code to pay.
                </div>
                {/* center image */}
                <div className="flex flex-center justify-center">
                    <Image src={getBankQRCode(setting?.bank_code, setting?.bank_account, payment.amount, payment.transaction_id)} width={200} height={200} alt="qrcode" />
                </div>
            </div>

            <div className="border-b border-b-gray-200"></div>

            <div className="flex flex-col gap-4">
                <label className="text-gray-900 font-semibold text-2sm">Payment infomation</label>
                <div className="flex flex-center justify-between flex-wrap gap-2">
                    <div className="flex flex-center gap-1.5">
                        <i className="ki-filled ki-basket text-gray-500"></i>
                        <div className="flex flex-center text-gray-700 font-medium text-2sm">
                            Bank name
                        </div>
                    </div>
                    <div className="text-gray-900 font-semibold text-sm">
                        {setting?.bank_name}
                    </div>
                </div>
                <div className="flex flex-center justify-between flex-wrap gap-2">
                    <div className="flex flex-center gap-1.5">
                        <i className="ki-filled ki-basket text-gray-500"></i>
                        <div className="flex flex-center text-gray-700 font-medium text-2sm">
                            Account number
                        </div>
                    </div>
                    <div className="text-gray-900 font-semibold text-sm">
                        {setting?.bank_account}
                    </div>
                </div>
                <div className="flex flex-center justify-between flex-wrap gap-2">
                    <div className="flex flex-center gap-1.5">
                        <i className="ki-filled ki-basket text-gray-500"></i>
                        <div className="flex flex-center text-gray-700 font-medium text-2sm">
                            Account name
                        </div>
                    </div>
                    <div className="text-gray-900 font-semibold text-sm">
                        {setting?.bank_account_name}
                    </div>
                </div>
            </div>

            <div className="border-b border-b-gray-200"></div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-center justify-between flex-wrap gap-2">
                    <div className="flex flex-center gap-1.5">
                        <i className="ki-filled ki-basket text-gray-500"></i>
                        <div className="flex flex-center text-gray-700 font-medium text-2sm">
                            Amount to transfer
                        </div>
                    </div>
                    <div className="text-gray-900 font-semibold text-sm">
                        {formatCurrency(payment?.amount)} đ
                    </div>
                </div>
                <div className="flex flex-center justify-between flex-wrap gap-2">
                    <div className="flex flex-center gap-1.5">
                        <i className="ki-filled ki-basket text-gray-500"></i>
                        <div className="flex flex-center text-gray-700 font-medium text-2sm">
                            Transfer content
                        </div>
                    </div>
                    <div className="text-gray-900 font-semibold text-sm">
                        {payment?.transaction_id?.toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="border-b border-b-gray-200"></div>

            <div className="lg:p-2 text-center ">
                <div className="text-2sm font-medium text-gray-800">
                    The QR code includes the ACCOUNT NUMBER, AMOUNT and PACKAGE CODE. Please do not edit the information after scanning the code.
                </div>
                <button className="btn btn-link text-danger hover:text-danger border-b-red-500" onClick={onCancel}>Cancel payment</button>
            </div>
        </div>
    )
}

export default BankingPaymentGuide