import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const STT = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="w-full bg-gray-900 flex justify-center text-white py-5">
        <div className="w-[96%] flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-5 xl:w-[1300px]">
          <div>
            <Link to={"/"} onClick={STT}>
              <img src={FooterLogo} alt="footer logo" className="w-[180px]" />
            </Link>
            <p className="fontStyle text-gray-300 text-[14px]">
              Probeg blan avtomobil
            </p>
          </div>
          <div className="space-y-3 lg:space-y-0 lg:flex lg:gap-7 xl:gap-16">
            <Link
              onClick={STT}
              to={"/katalog"}
              className="text-[18px] fontStyle flex"
            >
              Katalog
            </Link>
            <Link
              onClick={STT}
              to={"/aksiyalar"}
              className="text-[18px] fontStyle flex"
            >
              Aksiyalar
            </Link>
            <Link
              onClick={STT}
              to={"/kredit"}
              className="text-[18px] fontStyle flex"
            >
              Kredit
            </Link>
            <Link
              onClick={STT}
              to={"./kontactlar"}
              className="text-[18px] fontStyle flex"
            >
              Kantaktlar
            </Link>
          </div>
          <div className="">
            <p className="fontStyle text-white font-bold text-[23px]">
              8 33 303 82 82
            </p>
            <p className="fontStyle text-[#E70A32] truncate w-[100%] text-[14px]">
              @mardonbekhamidov876@gmail.com
            </p>
          </div>
        </div>
      </footer>
      <div className="w-full bg-gray-800 flex justify-center py-3">
        <div className="w-[96%] flex flex-col lg:flex-row justify-between lg:flex lg:w-[1300px]">
          <p className="text-[14px] fontStyle text-white">
            ©2024 - autoposter, barcha huquqlar himoyalangan
          </p>
          <p className="text-[14px] fontStyle text-white">
            Maxfiylik politikasi
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
