import Footer from "../Footer";
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/SidebarLib";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex grow">
      <Sidebar />
      <div className="wrapper flex grow flex-col">
        <Header />
        <main className="grow content pt-5" id="content" role="content">
          <div className="container-fixed" id="content_container">
          </div>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
