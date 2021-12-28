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
      <main
        style={{
          minHeight: "calc(100vh - 60px - 18px)",
          padding: "0 32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
