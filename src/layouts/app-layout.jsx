import HeaderSidebar from "@/components/header-sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <HeaderSidebar />
      <div className="content pt-32 pl-40 pr-16">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
