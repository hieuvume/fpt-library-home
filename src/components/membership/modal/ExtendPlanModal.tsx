import membershipApi from "@/api/membership";
import { BaseModal } from "@/components/modal/BaseModal";
import useAuth from "@/hooks/useAuth";
import { KTModal } from "@/metronic/core";
import { formatCurrency, formatDateShort } from "@/utils";
import { useRouter } from "next/router";
import { Confirm, Report } from "notiflix";
import { useState } from "react";

const ExtendPlanModal = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { current_membership } = user || {};
  const { membership } = current_membership || {};
  const [paymentMethod, setPaymentMethod] = useState("banking");

  const onUpgrade = () => {
    Confirm.show(
      "Confirm to extend plan",
      "Are you sure you want to extend your plan?",
      "Yes",
      "No",
      () => {
        setLoading(true)
        membershipApi.extendPlan(paymentMethod).then((res) => {
          Report.success('Upgrade success', "Upgrade successfully!", "OK", () => {
            KTModal.closeModal('extends-plan');
            router.push(`/payments?paymentId=${res._id}`);
          });
        }).catch((error) => {
          Report.failure('Upgrade failed', error.message, "OK");
        }).finally(() => setLoading(false));
      }
    );
  };

  const { start_date, end_date } = current_membership || {};
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const getNewPlanEndDate = () => {
    if (endDate < new Date()) {
      return new Date().setDate(new Date().getDate() + current_membership?.months * 30);
    } else {
      return endDate.setDate(endDate.getDate() + current_membership?.months * 30);
    }
  }

  return (
    <BaseModal modalKey="extends-plan" title={"Extend Plan"}>
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
                  Expires on {formatDateShort(getNewPlanEndDate())}
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
          <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
            <div className="flex flex-center gap-1.5">
              <i className="ki-filled ki-calendar-add text-gray-500"></i>
              <div className="flex flex-center text-gray-700 font-medium text-2sm">
                Extra months
              </div>
            </div>
            <div className="text-primary font-semibold text-sm">{current_membership?.months} months</div>
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
            {loading ? "Extending..." : "Extend plan"}
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ExtendPlanModal;
