import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import dynamic from "next/dynamic";

const GlobalInit = dynamic(() => import("../components/GlobalInit"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height]">
        <Header />
        <Navbar />
        <div className="container-fixed w-full flex px-0">
          <main className="flex flex-col grow" id="content" role="content">
            <div className="container-fixed">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
        <Footer />
      </div>
      <SearchModal />
      <GlobalInit />
    </>
  );
}
