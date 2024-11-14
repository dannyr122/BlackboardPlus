import HeaderSidebar from "@/components/header-sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <HeaderSidebar />
      <div className="content pt-24 pl-28 pr-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
