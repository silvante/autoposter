import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "../pages/pages.css";
import "../components/components.css";
import Adverticement from "../pages/Adverticement";

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Breadcrumps from "../components/Breadcrumps";
import Modul from "../components/Modul";

import "../autoPosterData";

const MainLayOut = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [showAD, setShowAD] = useState(false);

  // closeModul

  const location = useLocation();

  return (
    <div>
      {showAD && <Adverticement />}
      {/* <div className="w-full py-5">Mardonbek Xamidov</div> */}
      <Header />
      {location.pathname !== "/" && <Breadcrumps />}
      <main>
        <Outlet />
      </main>
      {showAD && (
        <button
          data-aos="fade-left"
          className="text-[35px] z-50 text-white fixed top-5 right-5"
          onClick={() => setShowAD(false)}
        >
          <i class="bx bx-x"></i>
        </button>
      )}
      <button
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="300"
        data-aos-duration="3000"
        onClick={() => setShowAD(true)}
        className="bg-[#E70A32] fixed bottom-5 right-5 rounded p-5 text-white hidden lg:blo"
      >
        Arzon Kreditga Auto 🚀
      </button>
      <Footer />
    </div>
  );
};

export default MainLayOut;
