import { Outlet } from "react-router-dom";
import { Main_PageLayout_Header, Main_PageLayout_Footer } from "./";

export const Main_PageLayout = () => {
  return (
    <>
      <Main_PageLayout_Header />
      <Outlet />
      <Main_PageLayout_Footer />
    </>
  );
};
