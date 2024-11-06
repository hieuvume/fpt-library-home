import { LoansRecordHistoryWrapper } from "@/components/layouts/dashboard/librarian";
import LibrarianLayout from "@/components/layouts/LibrarianLayout";

const librarianIndex = () => {
  return (
    <div>
      <LoansRecordHistoryWrapper />
    </div>
  );
}
librarianIndex.getLayout = function getLayout(page) {
    return <LibrarianLayout>{page}</LibrarianLayout>;
};
librarianIndex.requiresAuth = true;

librarianIndex.roles = ["LIBRARIAN", "OWNER", "ADMIN"];
export default librarianIndex;