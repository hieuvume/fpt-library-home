import { dashboardmembershipApi } from '@/api/membership-card';
import React from 'react';
import useSWR from 'swr';

interface MembershipData {
    count: number;
    membership: string;
    billing_cycle: string;
}

const MembershipStatistics: React.FC = () => {
    const { data, error } = useSWR('/api/membership-card/statistics', dashboardmembershipApi.statistics)
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    const { total_count, membershipStats } = data;
    const caculatePercentage = (count: number, total: number) => {
        return ((count / total) * 100).toFixed(1);
    }
    return (
        <div className="card bg-white p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Highlights</h3>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <i className="ki-filled ki-dots-vertical"></i>
                </button>
            </div>
            <div className="flex flex-col mb-6">
                <span className="text-sm text-gray-600">All time memberships</span>
                <div className="flex items-center mt-1">
                    <span className="text-3xl font-bold text-gray-900">{data?.total_count}</span>
                </div>
            </div>
            <div className="flex items-center gap-1 mb-6">
                {membershipStats.map((item, index) => {
                    const percentage = caculatePercentage(item.count, total_count);
                    const colors = ["bg-green-500", "bg-red-500", "bg-purple-500", "bg-orange-500"];
                    return (
                        <div
                            key={index}
                            className={`h-2 rounded ${colors[index % colors.length]}`}
                            style={{ width: `${percentage}%` }}
                        ></div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-700 mb-6">
                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span> Basic
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span> Premium
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span> Pro
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span> Standard
                </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
                {data && data?.membershipStats?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <i className="ki-filled ki-shop text-gray-500"></i>
                            <span className="text-sm font-medium text-gray-800">{item.membership} - {item.billing_cycle}</span>
                        </div>
                        <div className="flex items-center text-sm font-medium text-gray-800 gap-2">
                            <span>{item.count}</span>
                            <span className={`flex items-center gap-1 ${index % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                                <i className={`ki-filled ${index % 2 === 0 ? 'ki-arrow-up' : 'ki-arrow-down'}`}></i>
                                {index % 2 === 0 ? '2.3%' : '0.7%'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MembershipStatistics;
