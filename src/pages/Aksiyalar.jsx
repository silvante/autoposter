import React from "react";
import { aksiyalar } from "../autoPosterData";
import { Link } from "react-router-dom";

const Aksiyalar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[96%] mb-16 xl:w-[1300px]">
        <h3 className="text-black textStyle text-[30px] font-bold">
          Aksiyalar
        </h3>
        <div className="w-full grid grid-cols-1 gap-5 my-5 md:grid-cols-2 xl:grid-cols-3">
          {aksiyalar.map((aksiya) => {
            return (
              <div key={aksiya.id} className="space-y-5">
                <div className="w-full h-[230px] flex justify-center items-center overflow-hidden rounded-lg">
                  <img
                    src={aksiya.image}
                    alt={aksiya.title}
                    className="flex transition-all hover:scale-110"
                  />
                </div>
                <div className="">
                  <p className="text-[20px] font-bold">{aksiya.title}</p>
                  <p className="text-[20px] font-bold">{aksiya.date} gacha</p>
                </div>
                <div>
                  <Link
                    className="text-[20px] text-[#E70A32] transition-all fontStyle hover:text-[blue]"
                    to={`/aksiyalar/${aksiya.id}`}
                  >
                    ishtrok etish →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aksiyalar;
