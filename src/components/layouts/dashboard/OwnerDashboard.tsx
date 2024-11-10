import { borrowRecordDashboardApi } from "@/api/borrow-record";
import useSWR from "swr";
import MonthlyPaymentChart from "./owner/MonthlyPaymentChart";
import MembershipStatistics from "./owner/MembershipStatistics";

const OwnerDashboard = () => {
  const { data, isLoading, error } = useSWR(
    "/borrow-records-dashboard/status-statistics",
    () => borrowRecordDashboardApi.statusStatistics()
  );
  return (
    <>
      <>
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-medium leading-none text-gray-900">
                Dashboard
              </h1>
              <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
                Central Hub for Personal Customization
              </div>
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
              <div className="lg:col-span-1">
                <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
                  {data &&
                    data.map((item) => (
                      <div
                        key={item.status}
                        className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg"
                      >
                        <span />
                        <div className="flex flex-col gap-1 pb-4 px-5">
                          <span className="text-3xl font-semibold text-gray-900">
                            {item.count.toLocaleString() || 0}
                          </span>
                          <span className="text-2sm font-normal text-gray-700 capitalize">
                            {item.status || NaN}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="card h-full h-full">
                  <MonthlyPaymentChart />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
              <div className="lg:col-span-1">
                <div className="card h-full">
                  <MembershipStatistics />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default OwnerDashboard;
