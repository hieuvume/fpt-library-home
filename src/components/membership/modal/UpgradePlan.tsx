import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import { Membership } from "@/models/membership";
import { formatCurrency, formatDateShort } from "@/utils";
import { useState } from "react";

type UpgradePlanProps = {
  plan?: Membership;
};

const UpgradePlan = ({ plan }: UpgradePlanProps) => {
  const { user } = useAuth();
  const { current_membership } = user || {};
  const { membership } = current_membership || {};

  const [selectedMonths, setSelectedMonths] = useState(1);

  const startDate = new Date(current_membership?.start_date);
  const endDate = new Date(current_membership?.end_date);
  const today = new Date();

  const remainingDays = Math.max(
    0,
    Math.round((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  );

  // Chọn giá dựa trên số tháng (monthly_price hoặc yearly_price)
  const pricePerMonth =
    selectedMonths < 12 ? plan?.price_monthly : plan?.price_yearly;
  const totalAmount = pricePerMonth * selectedMonths;

  // Tính phí còn lại của gói hiện tại
  const remainingAmount = (membership?.price_monthly / 30) * remainingDays;

  // Giảm giá nếu nâng cấp
  const discount =
    plan?.price_monthly * selectedMonths - pricePerMonth * selectedMonths;

  // Chi phí cuối cùng sau khi trừ giảm giá
  const finalAmount = totalAmount - discount - remainingAmount;

  const newPlanEndDate = new Date(today);
  newPlanEndDate.setDate(newPlanEndDate.getDate() + selectedMonths * 30);

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
            <select
              className="select select-sm w-24"
              value={selectedMonths}
              onChange={(e) => setSelectedMonths(parseInt(e.target.value))}
            >
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-b border-b-gray-200"></div>

      <div className="flex flex-col gap-4">
        <label className="text-gray-900 font-semibold text-2sm">Billing</label>
        <div className="flex flex-center justify-between flex-wrap gap-2">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-basket text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              Total amount
            </div>
          </div>
          <div className="text-gray-900 font-semibold text-sm">
            {formatCurrency(totalAmount)}đ
          </div>
        </div>
        <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-icon text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              Remaining of the current billing cycle
            </div>
          </div>
          <div className="text-blue-500 font-semibold text-sm">
            {formatCurrency(remainingAmount.toFixed(0))}đ
          </div>
        </div>
        <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-discount text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              Discount
            </div>
          </div>
          <div className="text-red-500 font-semibold text-sm">
            - {formatCurrency(discount.toFixed(0))}đ
          </div>
        </div>
        <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
          <div className="flex flex-center gap-1.5">
            <i className="ki-filled ki-basket-ok text-gray-500"></i>
            <div className="flex flex-center text-gray-700 font-medium text-2sm">
              Final amount
            </div>
          </div>
          <div className="text-green-600 font-semibold text-sm">
            {formatCurrency(finalAmount.toFixed(0))}đ
          </div>
        </div>
        <button className="btn btn-primary justify-center">Upgrade</button>
      </div>
    </div>
  );
};

export default UpgradePlan;
