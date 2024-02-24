import React, { useRef, useState } from "react";
import { carsData } from "../autoPosterData";
import "../components/components.css";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const BestOfYear = () => {
  const [costom, setcostom] = useState({});
  const next = () => {
    costom.slideNext();
  };
  const prev = () => {
    costom.slidePrev();
  };
  const carsOfyear = carsData.filter((car) => car.year >= 2024);
  return (
    <div className="w-full bg-gray-200 items-center justify-center py-16 hidden lg:flex">
      <div className="w-[1300px]">
        <div className="card text-center bg-white rounded-2xl p-5">
          <h3 className="font-bold textStyle text-[30px]">
            <span className="text-[#E70A32]">Yilning</span> eng sara
            automobillari
          </h3>
          <Swiper
            // pagination={{
            //   type: "fraction",
            // }}
            onInit={(ev) => {
              setcostom(ev);
            }}
            navigation={false}
            modules={[EffectFade, Pagination, Navigation]}
            className="rounded-lg p-10 space-x-10 flex items-center"
          >
            <button
              className="bg-[#E70A32] text-white rounded-full py-2 px-3 absolute left-0 z-20"
              onClick={prev}
              aria-label="prev"
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            {carsOfyear.map((newCar) => {
              return (
                <SwiperSlide className="flex space-x-10 swipe" key={newCar.id}>
                  <div className="w-[60%] h-[350px] flex justify-center items-center overflow-hidden rounded-xl hover:shadow-xl transition-all relative">
                    <div className="absolute flex space-x-3 top-3 left-3 z-10">
                      <p className="bg-white text-[14px] py-[3px] px-[10px] fontStyle font-bold rounded-full">
                        {newCar.numberOfusers} foidalanuvchi
                      </p>
                      <p className="bg-white text-[14px] py-[3px] px-[10px] fontStyle font-bold rounded-full">
                        {newCar.year} yil
                      </p>
                    </div>
                    <img
                      src={newCar.image}
                      alt={newCar.name}
                      className="transition-all h-full w-full hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <p className="fontSyle text-gray-500 text-[30px]">
                      <span className="text-black font-bold">
                        {newCar.name}
                      </span>{" "}
                      • {newCar.year}
                    </p>
                    <p className="text-gray-500 fontStyle text-[24px] font-bold">
                      {newCar.year} yil , {newCar.probeg} km, Krosoveri{" "}
                      {newCar.krosover} l, benzini {newCar.benzin} l.s
                    </p>
                    <div className="bg-gray-200 rounded-xl p-3">
                      <div className="cost flex space-x-3 items-end">
                        <p className="text-[34px] font-bold fontStyle">
                          {newCar.reCost}$
                        </p>
                        <p className="text-[24px] font-bold fontStyle lineThrov">
                          {newCar.cost}$
                        </p>
                      </div>
                      <p className="fontStyle font-bold text-[18px]">
                        Kredit:{" "}
                        {newCar.kredit
                          ? `${newCar.kredit}$`
                          : "kredit ga Tolov yo'q"}
                      </p>
                    </div>
                    <Link
                      to={`sotib-olish/${newCar.id.toString()}`}
                      className={
                        "bg-[#E70A32] py-3 px-7 text-white rounded-full inline-block"
                      }
                    >
                      Sotib olish
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
            <button
              className="bg-[#E70A32] text-white rounded-full py-2 px-3 absolute right-0 z-20"
              onClick={next}
              aria-label="next"
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

// 995301281

export default BestOfYear;
