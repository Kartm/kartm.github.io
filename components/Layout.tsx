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
          minHeight: "calc(100vh - 60px - 60px)",
          padding: "32px 32px 0",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
