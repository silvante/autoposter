import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../pages/pages.css";
import "../components/components.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Breadcrumps from "../components/Breadcrumps";
import Modul from "../components/Modul";

import "../autoPosterData";

const MainLayOut = () => {
  const [showAD, setShowAD] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // closeModul

  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname !== "/" && <Breadcrumps />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayOut;
