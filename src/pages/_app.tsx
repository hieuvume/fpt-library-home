import "../styles/globals.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import MainLayout from "@/components/layouts/MainLayout";
import Head from "next/head";
import { setupAxios } from "@/api/axios";
import axios from "axios";


setupAxios(axios)

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
      <Head>
        <title>Readora - Unlock the World of Books</title>
      </Head>
      <Component {...pageProps} />
      <GlobalInit />
    </>
  );
}
