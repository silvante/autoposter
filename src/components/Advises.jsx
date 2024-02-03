import React from "react";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";

import { Link } from "react-router-dom";

const Advises = () => {
  return (
    <div className="w-full flex justify-center bg-gray-200 py-10">
      <div className="w-[96%] xl:w-[1300px]  flex items-center justify-center flex-wrap space-y-5 lg:justify-between lg:space-y-0 lg:space-x-0">
        <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px]">
          <img
            src={card1}
            alt="card1 image"
            className="absolute bottom-4 right-0"
          />
          <div className="space-y-3">
            <h3 className="font-bold textStyle text-[23px] w-[70%]">
              Automobillarga tanlov juda katta!
            </h3>
            <Link
              className={"text-[#E70A32] inline-block fontStyle text-[18px]"}
            >
              Qatnashish →
            </Link>
          </div>
        </div>
        <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px]">
          <img
            src={card2}
            alt="card2 image"
            className="absolute bottom-4 right-0"
          />
          <div className="space-y-3">
            <h3 className="font-bold textStyle text-[23px] w-[70%]">
              Qulay Automobil almashtirish!
            </h3>
            <Link
              className={"text-[#E70A32] inline-block fontStyle text-[18px]"}
            >
              Qatnashish →
            </Link>
          </div>
        </div>
        <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px]">
          <img
            src={card3}
            alt="card3 image"
            className="absolute bottom-4 right-0"
          />
          <div className="space-y-3">
            <h3 className="font-bold textStyle text-[23px] w-[70%]">
              4.9% Ylisga Kredit rasmiylashtirish!
            </h3>
            <Link
              className={"text-[#E70A32] inline-block fontStyle text-[18px]"}
            >
              Qatnashish →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advises;
