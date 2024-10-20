import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html className="h-full light" data-theme="true" lang="en">
      <Head />
      <body className={props.bodyClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);

  let bodyClass = '"antialiased flex h-full text-base text-gray-700 [--tw-page-bg-dark:var(--tw-coal-500)] [--tw-header-height:78px] [--tw-navbar-bg:var(--tw-secondary-active)] [--tw-navbar-bg-dark:var(--tw-coal-300)] bg-light dark:bg-coal-500"';
  if (ctx.pathname.startsWith('/dashboard')) {
    bodyClass = 'antialiased flex h-full demo1 sidebar-fixed header-fixed bg-[#fefefe] dark:bg-coal-500';
  }

  return { ...initialProps, bodyClass };
};