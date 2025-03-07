import useAuth from "@/hooks/useAuth";
import { formatCurrency } from "@/utils";
import React from "react";

type PlanCardProps = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isCurrentPlan: boolean;
  onUpgrade: () => void;
  annualBilling: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  isCurrentPlan,
  onUpgrade,
  annualBilling,
}) => {
  const displayedPrice = annualBilling ? yearlyPrice : monthlyPrice;
  const { user, isAuthenticated } = useAuth();
  const { current_membership } = user || {};
  const isDowngrade =
    current_membership?.membership?.price_monthly > monthlyPrice;
  const displayedText = isDowngrade ? "Downgrade" : "Upgrade";
  const isExpired = new Date(current_membership?.end_date || "") < new Date();

  return (
    <td className="!border-b-0 table-border-l table-border-t !p-5 !pt-7.5 relative">
      {isCurrentPlan && (
        <span className="absolute badge badge-sm badge-outline badge-success absolutes top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Current Plan
        </span>
      )}
      <h3 className="text-lg text-gray-900 font-medium pb-2">{name}</h3>
      <div className="text-gray-700 text-2sm">{description}</div>
      <div className="py-4">
        <div className="flex items-end gap-1.5">
          <div className="text-2xl text-gray-900 font-semibold leading-none">
            {displayedPrice > 0 ? `${formatCurrency(displayedPrice)}đ` : "Free"}
          </div>
          <div className="text-gray-700 text-2xs">
            {displayedPrice > 0 ? "per month" : ""}
          </div>
        </div>
        {/* old price */}
        {annualBilling && (
          <div className="text-gray-700 line-through">
            {formatCurrency(monthlyPrice)}đ
          </div>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <button
            className={`btn ${
              isCurrentPlan || monthlyPrice === 0 ? "btn-light" : "btn-primary"
            } btn-sm flex justify-center w-full`}
            onClick={onUpgrade}
            data-modal-toggle={`${
              !isCurrentPlan && monthlyPrice > 0 ? "#plan-action-modal" : ""
            }`}
          >
            {isCurrentPlan
              ? "Current Plan"
              : monthlyPrice > 0
              ? displayedText
              : "Get Started"}
          </button>
        ) : (
          <button
            className={`btn ${
              isCurrentPlan || monthlyPrice === 0 ? "btn-light" : "btn-primary"
            } btn-sm flex justify-center w-full`}
          >
            Login to Upgrade
          </button>
        )}
      </div>
    </td>
  );
};

export default PlanCard;
