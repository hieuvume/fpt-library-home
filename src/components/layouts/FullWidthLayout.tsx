import Footer from "../Footer";
import Header from "./home/Header";
import Navbar from "./home/Navbar";

const FullWidthLayout = ({ children }) => {
  return (
    <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height]">
      <Header />
      <Navbar />
      <div className="w-full flex px-0">
        <main className="flex flex-col grow" id="content" role="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FullWidthLayout;
