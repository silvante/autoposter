import React from "react";
import { Outlet } from "react-router-dom";

const OtherLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default OtherLayout;
