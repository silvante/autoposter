import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { aksiyalar } from "../autoPosterData";
import Modul from "../components/Modul";

const AksiyaDatails = () => {
  const { title } = useParams();

  const [shows, setShows] = useState(false);

  const aksiya = aksiyalar.find((aksiya) => aksiya.title === title);
  return (
    <>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[96%] xl:w-[1300px]">
          <h3 className="text-black fontStyle text-[20px] font-bold mb-5 md:text-[30px]">
            {aksiya.title}
          </h3>
          <div className="rounded-lg shadow-md  p-2 w-full space-y-5 lg:w-[70%] lg:p-7">
            <img
              src={aksiya.image}
              alt={aksiya.title}
              className="rounded-lg transition-all hover:shadow-xl"
            />
            <p className="fontStyle">{aksiya.info}</p>
            <button className="bg-[#E70A32] py-3 px-5 rounded-md text-white" onClick={() => setShows(true)}>
              Aksiyada Ishtrok etish
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[96%] xl:w-[1300px]">
          <h3 className="text-black fontStyle text-[20px] font-bold md:text-[30px]">
            Boshqa aksiyalar
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
                    <button
                      className="text-[20px] text-[#E70A32] transition-all fontStyle hover:text-[blue]"
                      to={`/aksiyalar/${aksiya.title}`}
                    >
                      ishtrok etish →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {shows && <Modul />}
    </>
  );
};

export default AksiyaDatails;
