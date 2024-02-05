import React, { useState } from "react";
import Aksiyalar from "./Aksiyalar";
import { Link, useLocation } from "react-router-dom";

const Filter = () => {
  // const [arr, setArr] = useState([]);

  const location = useLocation();
  const filter = location.state && location.state.filtered5;
  // setArr(filter);
  return (
    <div className="w-full justify-center flex">
      <div className="w-[96%] xl:w-[1300px] space-y-5">
        <div className="w-full flex justify-between">
          <h2 className="textStyle text-[20px] flex md:text-[25px] items-center">
            <span className="text-[#E70A32]">Filter</span>-sorovi boyicha auto
          </h2>
        </div>
        {filter.length !== 0 && (
          <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
            {filter.map((car) => {
              return (
                <Link
                  to={`/mark/model/sotib-olish/${car.id}`}
                  key={car.id}
                  className="rounded space-y-3 relative anime"
                >
                  <div className="image_div relative">
                    <div className="absolute flex space-x-3 top-3 left-3 z-10">
                      <p className="bg-white text-[12px] py-[3px] px-[7px] fontStyle font-bold rounded-full">
                        {car.numberOfusers} foidalanuvchi
                      </p>
                      <p className="bg-white text-[12px] py-[3px] px-[7px] fontStyle font-bold rounded-full">
                        {car.year} yil
                      </p>
                    </div>
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full transition-all hover:scale-110"
                    />
                  </div>
                  <div className="space-y-5">
                    <p className="fontSyle text-gray-500 text-[22px]">
                      <span className="text-black font-bold">{car.name}</span> •{" "}
                      {car.year}
                    </p>
                    <p className="text-gray-500 fontStyle text-[18px] font-bold">
                      {car.year} yil , {car.probeg} km, Krosoveri {car.krosover}{" "}
                      l, benzini {car.benzin} l.s
                    </p>
                    <div className="bg-gray-200 rounded p-3 hoverd">
                      <div className="cost flex space-x-3 items-end">
                        <p className="text-[26px] font-bold fontStyle">
                          {car.reCost}$
                        </p>
                        <p className="text-[18px] font-bold fontStyle lineThrov">
                          {car.cost}$
                        </p>
                      </div>
                      <p className="fontStyle font-bold">
                        Kredit:{" "}
                        {car.kredit ? `${car.kredit}$` : "kredit ga Tolov yo'q"}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        {filter.length === 0 && (
          <div className="w-full text-center py-24 space-y-5 anime">
            <h1 className="text-gray-500 text-[70px]">(┬┬﹏┬┬)</h1>
            <p className="text-gray-500 text-[20px] md:text-[28px]">
              Filter malumoti boyicha automobil
              yoq!
            </p>
          </div>
        )}
        <Aksiyalar />
      </div>
    </div>
  );
};

export default Filter;
