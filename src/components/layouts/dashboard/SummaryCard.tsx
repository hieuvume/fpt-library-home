import { formatCurrency } from "@/utils";
import React from "react";

const SummaryCard = ({ icon, title, count }) => {
  return (
    <div className="card flex-col justify-between gap-5 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
      <i className={`mt-4 ms-5 text-3xl ki-filled ${icon}`} />
      <div className="flex flex-col gap-1 pb-4 px-5">
        <span className="text-3xl font-semibold text-gray-900">
          {formatCurrency(count)}
        </span>
        <span className="text-2sm font-normal text-gray-700">
          {title || "Title"}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
