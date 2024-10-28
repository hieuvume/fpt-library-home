import membershipApi from "@/api/membership";
import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import { Membership } from "@/models/membership";
import { formatCurrency, formatDateShort } from "@/utils";
import { Confirm } from "notiflix";

type DowngradePlanProps = {
  plan?: Membership;
};

const DowngradePlan = ({ plan }: DowngradePlanProps) => {
  const { user } = useAuth();
  const { current_membership } = user || {};
  const { membership } = current_membership || {};

  const endDate = new Date(current_membership?.end_date);
  const today = new Date();

  // Tính số ngày còn lại
  const remainingDays = Math.max(
    0,
    Math.round((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );

  const isMonthly = current_membership?.billing_cycle === "monthly";
  const currentPrice = isMonthly
    ? membership?.price_monthly
    : membership?.price_yearly;
  const pricePerDay = currentPrice / 30;

  // Tính phí còn lại của gói hiện tại
  const remainingAmount = pricePerDay * remainingDays;

  // Giá mỗi ngày của gói mới
  const newPlanPricePerDay = (plan?.price_monthly || 0) / 30;

  // Tính số ngày có thể mua với số tiền còn lại
  const daysCanPurchase = Math.floor(remainingAmount / newPlanPricePerDay);

  // Cập nhật ngày kết thúc mới của gói downgrade
  const newPlanEndDate = new Date(today);
  newPlanEndDate.setDate(newPlanEndDate.getDate() + daysCanPurchase);

  const handleDowngrade = () => {
    Confirm.show(
      "Confirm to downgrade plan",
      "Are you sure you want to downgrade your plan?",
      "Yes",
      "No",
      () => {
        membershipApi.downgradePlan(plan._id).then((res) => {
          console.log(res);
        });
      }
    );
  };

  return (
    <div className="grid gap-5">
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
                {membership?.name} Plan
              </a>
              <span className="text-2sm text-gray-700">
                Expires on {formatDateShort(current_membership?.end_date)}
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
                {plan?.name} Plan
              </a>
              <span className="text-2sm text-gray-700">
                Expires on {formatDateShort(newPlanEndDate)}
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

      <div className="border-b border-b-gray-200"></div>

      <div className="flex flex-col gap-4">
        <label className="text-gray-900 font-semibold text-2sm">Billing</label>
        <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-icon text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              Remaining amount of current plan
            </div>
          </div>
          <div className="text-blue-500 font-semibold text-sm">
            {formatCurrency(remainingAmount.toFixed(0))}đ 
          </div>
        </div>
        <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-icon text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              New plan expiration date
            </div>
          </div>
          <div className="text-green-600 font-semibold text-sm">
            {formatDateShort(newPlanEndDate)}
          </div>
        </div>
        <button
          className="btn btn-primary justify-center"
          onClick={handleDowngrade}
        >
          Downgrade
        </button>
      </div>
    </div>
  );
};

export default DowngradePlan;
