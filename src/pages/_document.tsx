import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html>
      <Head />
      <body className="bg-stone-100 dark:bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
