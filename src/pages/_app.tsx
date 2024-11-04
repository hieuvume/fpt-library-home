import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import HomeLayout from "@/components/layouts/HomeLayout";
import Head from "next/head";
import { setupAxios } from "@/api/axios";
import axios from "axios";
import { withAuth } from "@/components/withAuth";

setupAxios(axios);

const GlobalInit = dynamic(() => import("../components/GlobalInit"), {
  ssr: false,
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  requiresAuth?: boolean; // Thêm thuộc tính này để kiểm tra khi cần auth
  roles?: string[]; // Thêm thuộc tính roles nếu cần giới hạn quyền truy cập
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <HomeLayout>{page}</HomeLayout>);

  const PageComponent = Component.requiresAuth
    ? withAuth(Component, Component.roles || [])
    : Component;

  return getLayout(
    <>
      <Head>
        <title>Readora - Unlock the World of Books</title>
      </Head>
      <PageComponent {...pageProps} />
      <GlobalInit />
    </>
  );
}
