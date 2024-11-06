import Footer from "../Footer";
import Header from "./dashboard/Header";
import LibrarianSidebar from "./dashboard/LibrarianSidebar";
import OwnerSidebar from "./dashboard/OwnerSidebar";


const OwnerLayout = ({ children }) => {
  return (
    <div className="flex grow">
      <OwnerSidebar />
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

export default OwnerLayout;
