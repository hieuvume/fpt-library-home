// components/PlansPage.tsx
import React, { useState } from "react";
import useSWR from "swr";
import membershipApi from "@/api/membership";
import useAuth from "@/hooks/useAuth";
import PlanCard from "@/components/membership/PlanCard";
import PlanTableRow from "@/components/membership/PlanTableRow";
import FAQItem from "@/components/membership/FAQItem";
import { Membership } from "@/models/membership";
import PlanActionModal from "@/components/membership/modal/PlanActionModal";

const PlansPage: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const { user } = useAuth();
  const {
    data: plans,
    isLoading,
    error,
  } = useSWR("/api/plans", () => membershipApi.getMemberships(), {
    revalidateOnFocus: false,
  });
  const { current_membership } = user || {};
  const [selected, setSelected] = useState<Membership | undefined>(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading plans</p>;

  return (
    <div className="container-fixed">
      <div className="grid gap-5 lg:gap-7.5">
        <div className="scrollable-x-auto pt-3 -mt-3">
          <table className="table table-fixed min-w-[1000px] table-border-b table-border-r table-rounded card-rounded">
            <tbody>
              <tr>
                <td className="!border-b-0 align-bottom !p-5 !pt-7.5 !pb-6">
                  <label className="switch switch-sm">
                    <input
                      defaultChecked={annualBilling}
                      className="order-1"
                      name="check"
                      type="checkbox"
                      onChange={() => setAnnualBilling(!annualBilling)}
                    />
                    <div className="switch-label order-2">
                      <span className="text-gray-800 text-2sm font-semibold">
                        Annual Billing
                      </span>
                    </div>
                  </label>
                </td>
                {plans?.map((plan) => (
                  <PlanCard
                    key={plan._id}
                    name={plan.name}
                    description={`Description for ${plan.name}`}
                    monthlyPrice={plan.price_monthly}
                    yearlyPrice={plan.price_yearly}
                    isCurrentPlan={
                      current_membership?.membership?._id === plan._id
                    }
                    onUpgrade={() => setSelected(plan)}
                    annualBilling={annualBilling}
                  />
                ))}
              </tr>
              {/* Thêm các dòng khác bằng cách sử dụng PlanTableRow */}
              <PlanTableRow
                feature="Resources"
                values={plans.map(
                  (plan) => `Access to ${plan.resources_count} books`
                )}
              />
              <PlanTableRow
                feature="Max Borrow Days"
                values={plans.map((plan) => `${plan.max_borrow_days} days`)}
              />
              <PlanTableRow
                feature="Max Books Per Borrow"
                values={plans.map(
                  (plan) => `${plan.max_borrow_books_per_time} books`
                )}
              />
              <PlanTableRow
                feature="Max Reserve Books Monthly"
                values={plans.map(
                  (plan) => `${plan.max_reserve_books_per_montly} books`
                )}
              />
              <PlanTableRow
                feature="Hold Allowed"
                values={plans.map((plan) => (plan.hold_allowed ? "Yes" : "No"))}
              />
              <PlanTableRow
                feature="Renewal Allowed"
                values={plans.map((plan) =>
                  plan.renewal_allowed ? "Yes" : "No"
                )}
              />
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">FAQ</h3>
          </div>
          <div className="card-body py-3">
            <FAQItem
              question="How is pricing determined for each plan?"
              answer="Pricing is determined by features and usage."
            />
            <FAQItem
              question="What payment methods are accepted?"
              answer="We accept credit cards, PayPal, etc."
            />
          </div>
        </div>
      </div>
      <PlanActionModal plan={selected} />
    </div>
  );
};

export default PlansPage;
