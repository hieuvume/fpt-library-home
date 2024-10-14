import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height]">
      <Header />
      <Navbar />
      <div className="container-fixed w-full flex px-0">
        <main className="flex flex-col grow" id="content" role="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
