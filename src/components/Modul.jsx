import React from "react";
import ADimg from "../assets/images/ad.png";
import { Link } from "react-router-dom";

const Modul = (shows) => {
  return (
    <div className="w-full full-height fixed bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
      <div
        className="bg-white rounded-[12px] flex flex-col space-x-5 justify-center sm:flex-row"
        data-aos="zoom-in"
      >
        <img src={ADimg} className="w-[260px]" alt="adverticement image" />
        <div className="w-[90%] py-5 sm:p-5 sm:w-[380px]">
          <div className="mb-5">
            <p className="text-[32px] font-900 textStyle">
              Ushbu event da qatnashish!
            </p>
            <p className="text-[18px] fontStyle">
              Ushbu eventda qatnashish uchun{" "}
              <span className="font-bold">Automobul </span> sotib olishingiz
              kerak.
            </p>
          </div>
          <Link
          onClick={() => setShows(false)}
            to={"/"}
            className="text-white py-3 w-full bg-[#E70A32] rounded inline-block text-center"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modul;
