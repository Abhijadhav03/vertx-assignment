// Dashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Utility } from "../layouts/utilitybar";
import { Sidebar } from "../layouts/sidebar";
import { Header } from "../layouts/header";
import { cn } from "../utils/cn";
import Dashboard from "../layouts/dashboard";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-black flex">
      {/* Sidebar and Utility */}
      <Sidebar />
      <Utility />

      {/* Main Content Area */}
      <div className={cn("ml-[16rem] transition-[margin] duration-300 w-full")}>
        {/* Fixed Header */}
        <Header />

        {/* Scrollable content below the fixed Header */}
        <div className="max-w-[1200px] mx-auto h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-4 pt-[60px]">
          <Dashboard />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout; 