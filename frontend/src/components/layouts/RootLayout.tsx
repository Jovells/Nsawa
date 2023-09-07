import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../molecules";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
