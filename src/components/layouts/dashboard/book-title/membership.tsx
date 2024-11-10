import membershipApi from "@/api/membership";
import useSWR from "swr";
import { useState } from "react";
import { Report } from "notiflix";
import { dashboardmembershipApi } from "@/api/membership-card";
import { bookTitleDashboardApi } from "@/api/book-title";


export default function MemberShip({ bookId, mutate }) {
  const { data, isLoading, error } = useSWR(
    "/membership",
    () => bookTitleDashboardApi.getMemberships()
  );
  const [selectedMembership, setSelectedMembership] = useState("");

  const handleMembershipChange = async (event) => {
    const membershipId = event.target.value;
    setSelectedMembership(membershipId);

    try {
   //   await bookTitleDashboardApi.updateMembership(bookId, { membershipId });
      Report.success("Success", "Membership updated successfully", "OK");
      mutate(); // Refresh data after update
    } catch (error) {
      console.error(error);
      Report.failure("Error", "Failed to update membership", "OK");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading memberships.</div>;

  return (
    <div className="container-fixed">
      <h1>Membership</h1>
      <div className="mt-4">
        <label htmlFor="membership-select" className="block text-gray-700 font-medium mb-2">
          Select Membership
        </label>
        <select
          id="membership-select"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedMembership}
          onChange={handleMembershipChange}
        >
          <option value="">-- Select Membership --</option>
          {data?.docs?.map((membership) => (
            <option key={membership._id} value={membership._id}>
              {membership.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
