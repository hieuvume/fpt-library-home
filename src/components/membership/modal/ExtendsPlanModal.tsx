import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import { formatCurrency, formatDateShort } from "@/utils";
import { useState } from "react";

const ExtendsPlanModal = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { current_membership } = user || {};
  const { membership } = current_membership || {};
  const [paymentMethod, setPaymentMethod] = useState("banking");

  const onUpgrade = () => {};

  const newPlanEndDate = new Date(current_membership?.end_date);

  return (
    <BaseModal modalKey="extends-plan" title={"Extends Plan"}>
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
                  {membership?.name} Plan
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
          <label className="text-gray-900 font-semibold text-2sm">
            Billing
          </label>
          <div className="flex flex-center justify-between flex-wrap gap-2">
            <div className="flex flex-center gap-1.5">
              <i className="ki-filled ki-basket text-gray-500"></i>
              <div className="flex flex-center text-gray-700 font-medium text-2sm">
                Total amount
              </div>
            </div>
            <div className="text-gray-900 font-semibold text-sm">
              {formatCurrency(current_membership?.price)}đ
            </div>
          </div>
          <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
            <div className="flex flex-center gap-1.5">
              <i className="ki-filled ki-discount text-gray-500"></i>
              <div className="flex flex-center text-gray-700 font-medium text-2sm">
                Discount
              </div>
            </div>
            <div className="text-red-500 font-semibold text-sm">- 0đ</div>
          </div>
          <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
            <div className="flex flex-center gap-1.5">
              <i className="ki-filled ki-basket-ok text-gray-500"></i>
              <div className="flex flex-center text-gray-700 font-medium text-2sm">
                Final amount
              </div>
            </div>
            <div className="text-green-600 font-semibold text-sm">
              {formatCurrency(current_membership?.price)}đ
            </div>
          </div>
          <div className="flex flex-center justify-between items-center flex-wrap gap-2 mb-1">
            <div className="flex flex-center gap-1.5">
              <i className="ki-filled ki-bank text-gray-500"></i>
              <div className="flex flex-center text-gray-700 font-medium text-2sm">
                Payment method
              </div>
            </div>
            {/* <div className="text-green-600 font-semibold text-sm">
            
          </div> */}

            <select
              className="select select-sm w-44"
              defaultValue={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="banking">Bank transfer</option>
              <option value="momo">Momo wallet</option>
              <option value="cash">Cash at the library</option>
            </select>
          </div>
          {/* note payment  */}
          <button
            className="btn btn-primary justify-center"
            onClick={onUpgrade}
            disabled={loading}
          >
            {loading ? "Upgrading..." : "Upgrade"}
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ExtendsPlanModal;
