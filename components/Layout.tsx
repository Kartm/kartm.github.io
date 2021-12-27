import Header from "./Header";
import Footer from "./Footer";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
