import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-auto md:max-w-[700px]">{children}</main>
      <Footer />
    </>
  );
};

export default Page;
