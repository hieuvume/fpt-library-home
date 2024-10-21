import { ModalProvider } from "@/provider/ModalProvider";
import Footer from "../Footer";
import FullWidthLayout from "./FullWidthLayout";
import Header from "./home/Header";
import Navbar from "./home/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <ModalProvider>
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
    </ModalProvider>
  );
};

export default HomeLayout;
