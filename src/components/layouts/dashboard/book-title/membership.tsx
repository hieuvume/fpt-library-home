import useSWR from "swr";
import { useState } from "react";
import { Report } from "notiflix";
import { dashboardmembershipApi } from "@/api/membership-card";
import { bookTitleDashboardApi } from "@/api/book-title";

export default function MemberShip({ bookId }) { // Pass bookId as a prop
  const { data, isLoading, error, mutate } = useSWR(
    "/membership-dashboard/get-all",
    () => dashboardmembershipApi.getAll()
  );

  const [selectedMembership, setSelectedMembership] = useState("");

  const handleMembershipChange = async (event) => {
    const membershipId = event.target.value;
    setSelectedMembership(membershipId);

    try {
      // Update the membership of the book by passing the membership ID in the correct format
      await bookTitleDashboardApi.updateMembership(bookId, [membershipId]); 
      Report.success("Success", "Membership updated successfully", "OK");
      window.location.reload();

    } catch (error) {

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
          {data?.map((membership) => (
            <option key={membership._id} value={membership._id}>
              {membership.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
