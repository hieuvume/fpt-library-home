import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full light" data-theme="true" lang="en">
      <Head />
      <body className="antialiased flex h-full text-base text-gray-700 [--tw-page-bg-dark:var(--tw-coal-500)] [--tw-header-height:78px] [--tw-navbar-bg:var(--tw-secondary-active)] [--tw-navbar-bg-dark:var(--tw-coal-300)] bg-light dark:bg-coal-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
