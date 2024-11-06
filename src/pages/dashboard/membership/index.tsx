import MembershipCard from "@/components/layouts/dashboard/membership-card";
import Card from "@/components/layouts/dashboard/membership-card/card";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const MembershipPage = () => {
    return (
        <div>
           <MembershipCard />
         
        </div>
    );
};
MembershipPage.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
MembershipPage.requiresAuth = true;

MembershipPage.roles = ["LIBRARIAN", "OWNER", "ADMIN"];
export default MembershipPage;