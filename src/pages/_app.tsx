import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import MainLayout from "@/components/layouts/MainLayout";

const GlobalInit = dynamic(() => import("../components/GlobalInit"), {
  ssr: false,
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(
    <>
      <Component {...pageProps} />
      <GlobalInit />
    </>
  );
}
