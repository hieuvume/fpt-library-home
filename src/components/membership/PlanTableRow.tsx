import React from 'react';

type PlanTableRowProps = {
  feature: string;
  values: string[];
};

const PlanTableRow: React.FC<PlanTableRowProps> = ({ feature, values }) => (
  <tr>
    <td className="table-border-l !px-5 !py-3.5">
      <div className="text-gray-900 text-2sm leading-none font-medium">{feature}</div>
    </td>
    {values.map((value, index) => (
      <td key={index} className="table-border-l !px-5 !py-3.5">
        <div className="text-gray-800 text-2sm">{value}</div>
      </td>
    ))}
  </tr>
);

export default PlanTableRow;
