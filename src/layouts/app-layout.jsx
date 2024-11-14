import HeaderSidebar from "@/components/header-sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <HeaderSidebar />
      <div className="content pt-20 pl-24">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
