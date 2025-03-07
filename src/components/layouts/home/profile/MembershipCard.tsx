import useAuth from "@/hooks/useAuth";
import { capitalize, formatCurrency, formatDateShort } from "@/utils";
import Link from "next/link";

const MembershipCard = () => {
  const { user } = useAuth();
  const { current_membership } = user || {};

  const isFreePlan = current_membership?.membership?.price_monthly === 0;
  const isExpired = new Date(current_membership?.end_date || "") < new Date();

  return (
    <div className="card">
      <div className="card-body lg:py-7.5">
        <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
          <div className="flex flex-wrap items-center gap-5 justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {current_membership?.membership?.name} Plan
                </h2>
                <span className="badge badge-sm badge-success badge-outline">
                  {capitalize(current_membership?.billing_cycle || "")}
                </span>
              </div>
              <p className="text-2sm text-gray-700">
                {current_membership?.membership?.description}
              </p>
            </div>
            <div className="flex gap-2.5">
              <Link href="/plans" className="btn btn-sm btn-light">
                Upgrade / Downgrade
              </Link>
              <span data-modal-toggle="#extends-plan" className="btn btn-sm btn-primary">
                Extend
              </span>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2 lg:gap-5">
            <div className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-400 shrink-0 rounded-md px-3.5 py-2 min-w-24 max-w-auto">
              <span className="text-gray-900 text-md leading-none font-medium">
                {formatCurrency(current_membership?.price)}đ
              </span>
              <span className="text-gray-700 text-2sm">
                {capitalize(current_membership?.billing_cycle || "")} Total
              </span>
            </div>
            <div className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-gray-400 shrink-0 rounded-md px-3.5 py-2 min-w-24 max-w-auto">
              <span className="text-gray-900 text-md leading-none font-medium">
                {formatCurrency(current_membership?.price)}đ
              </span>
              <span className="text-gray-700 text-2sm">Next Bill Amount</span>
            </div>
            <div
              className={`grid grid-cols-1 content-between gap-1.5 border border-dashed shrink-0 rounded-md px-3.5 py-2 min-w-24 max-w-auto ${
                isExpired ? "border-red-600" : "border-gray-400"
              }`}
            >
              <span
                className={`${
                  isExpired ? "text-red-600" : "text-gray-900"
                } text-md leading-none font-medium`}
              >
                {formatDateShort(current_membership?.end_date)}
              </span>
              <span
                className={`${
                  isExpired ? "text-red-600" : "text-gray-700"
                } text-2sm`}
              >
                {isExpired ? "Expired" : "Next Billing Date"}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="text-2sm text-gray-700">
              Borrowed of month ({current_membership?.total_borrowed} of{" "}
              {current_membership?.membership.max_reserve_books_per_montly}{" "}
              books)
            </span>
            <div className="progress progress-primary">
              <div
                className="progress-bar"
                style={{
                  width: `${
                    (current_membership?.total_borrowed /
                      current_membership?.membership
                        .max_reserve_books_per_montly) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
