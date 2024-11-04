import { dashboardPaymentApi } from "@/api/payment";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import PaymentMethodCell from "@/components/layouts/home/payment/cell/PaymentMethodCell";
import PaymentStatusCell from "@/components/layouts/home/payment/cell/PaymentStatusCell";
import CurrencyCell from "@/components/table/cell/CurrencyCell";
import {
  capitalize,
  formatCurrency,
  formatDateShort,
  formatDateTime,
} from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { Confirm, Report } from "notiflix";
import { useState } from "react";
import useSWR from "swr";

const PaymentDetailPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.id as string;

  const { data, isLoading, error, mutate } = useSWR(
    id ? `/payments/${id}` : null,
    () => dashboardPaymentApi.getPayment(id)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading payment</div>;

  const onApprove = () => {
    Confirm.show(
      "Approve Payment",
      "Are you sure you want to approve this payment?",
      "Yes",
      "No",
      () => {
        setLoading(true);
        dashboardPaymentApi
          .approvePayment(id)
          .then(() => {
            Report.success(
              "Success",
              "Payment approved successfully",
              "OK",
              () => mutate()
            );
          })
          .catch((err) => {
            Report.failure(
              "Error",
              err.message ?? "An error occurred while approving payment",
              "OK"
            );
          })
          .finally(() => setLoading(false));
      }
    );
  };

  const onReject = () => {
    Confirm.show(
      "Reject Payment",
      "Are you sure you want to reject this payment?",
      "Yes",
      "No",
      () => {
        setLoading(true);
        dashboardPaymentApi
          .rejectPayment(id)
          .then(() => {
            Report.success(
              "Success",
              "Payment rejected successfully",
              "OK",
              () => mutate()
            );
          })
          .catch((err) => {
            Report.failure(
              "Error",
              err.message ?? "An error occurred while approving payment",
              "OK"
            );
          })
          .finally(() => setLoading(false));
      }
    );
  };

  const onRollback = () => {
    Confirm.show(
      "Rollback Payment",
      "Are you sure you want to rollback this payment?",
      "Yes",
      "No",
      () => {
        setLoading(true);
        dashboardPaymentApi
          .rollbackPayment(id)
          .then(() => {
            Report.success(
              "Success",
              "Payment rolled back successfully",
              "OK",
              () => mutate()
            );
          })
          .catch((err) => {
            Report.failure(
              "Error",
              err.message ?? "An error occurred while approving payment",
              "OK"
            );
          })
          .finally(() => setLoading(false));
      }
    );
  };

  return (
    <>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-medium leading-none text-gray-900">
              Payments #{data?.transaction_id}
            </h1>
            <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
              Payments made by customers
            </div>
          </div>
        </div>
      </div>

      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            <div className="col-span-1">
              <div className="flex flex-col gap-5 lg:gap-7.5">
                <div className="card min-w-full">
                  <div className="card-header">
                    <h3 className="card-title">Payment details</h3>
                    <div className="flex items-center gap-2">
                      {data?.payment_status === "pending" && (
                        <>
                          <button
                            className="btn btn-sm btn-primary btn-outline"
                            onClick={onApprove}
                          >
                            Approve
                          </button>
                          <button
                            className="btn btn-sm btn-danger btn-outline"
                            onClick={onReject}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {data?.payment_status === "completed" && (
                        <button
                          className="btn btn-sm btn-info btn-outline"
                          onClick={onRollback}
                        >
                          Rollback
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="card-table scrollable-x-auto pb-3">
                    <table className="table align-middle text-sm text-gray-500">
                      <tbody>
                        <tr>
                          <td className="text-gray-600 font-normal">
                            Customer
                          </td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Image
                                className="w-8 h-8 rounded-full"
                                src={data?.user?.avatar_url}
                                alt=""
                                width={50}
                                height={50}
                              />
                              <span className="text-gray-800 fw-semibold">
                                {data?.user?.full_name}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">
                            Transaction Id
                          </td>
                          <td className="text-gray-800 fw-semibold text-primary">
                            {data?.transaction_id}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Method</td>
                          <td className="text-gray-800 fw-semibold">
                            <PaymentMethodCell value={data?.payment_method} />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Type</td>
                          <td className="text-gray-800 fw-semibold">
                            {capitalize(data?.payment_type || " ")}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Amount</td>
                          <td className="text-gray-800 fw-semibold">
                            <CurrencyCell value={data?.amount} />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Status</td>
                          <td className="text-gray-800 fw-semibold">
                            <PaymentStatusCell value={data?.payment_status} />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Details</td>
                          <td className="text-gray-800 font-normal">
                            {data?.details}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">
                            Payment Date
                          </td>
                          <td className="text-gray-800 font-normal">
                            {formatDateTime(data?.payment_date)}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-gray-600 font-normal">Created</td>
                          <td className="text-gray-800 font-normal">
                            {formatDateTime(data?.created_at)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-5 lg:gap-7.5">
                <div className="card">
                  <div
                    className="card-header gap-2"
                    id="settings_auth_two_factor"
                  >
                    <h3 className="card-title">Plan details</h3>
                  </div>
                  <div className="card-body lg:py-7.5">
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:gap-7.5 gap-5 mb-2">
                      <div className="md:flex-1 grid content-between border border-gray-200 rounded-xl">
                        <div className="flex flex-col gap-2 p-5 pt-4">
                          <span className="text-base text-gray-900 font-medium hover:text-primary">
                            {data?.membership?.name} Plan
                          </span>
                          <p className="text-2sm text-gray-700 mb-1">
                            {data?.membership?.description}
                          </p>
                          <div className="text-sm text-primary font-bold">
                            {formatCurrency(data?.membership?.price_monthly)} x{" "}
                            {data?.months} months
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <div className="flex items-center justify-between border border-gray-200 rounded-xl gap-2 px-4 py-4 bg-secondary-clarity">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 shrink-0 font-bold text-sm text-center">
                            FROM
                          </div>
                          <div className="flex flex-col">
                            <a
                              href="#"
                              className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px"
                            >
                              {data?.from?.membership?.name} Plan
                            </a>
                            <span className="text-2sm text-gray-700">
                              Expires on {formatDateShort(data?.from?.end_date)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="badge badge-sm badge-success badge-outline">
                            Current
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border border-gray-200 rounded-xl gap-2 px-4 py-4 bg-secondary-clarity">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 shrink-0 font-bold text-sm text-center">
                            TO
                          </div>
                          <div className="flex flex-col">
                            <a
                              href="#"
                              className="text-sm font-medium text-gray-900 hover:text-primary-active mb-px"
                            >
                              {data?.to?.membership?.name} Plan
                            </a>
                            <span className="text-2sm text-gray-700">
                              Expires on {formatDateShort(data?.to?.end_date)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="badge badge-sm badge-success badge-outline">
                            New
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentDetailPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default PaymentDetailPage;
