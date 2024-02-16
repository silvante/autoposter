import React from "react";
import { Link, useParams } from "react-router-dom";
import { carsData } from "../autoPosterData";
import Aksiyalar from "./Aksiyalar";

const SelectedCars = () => {
  const { model } = useParams();
  const modelsArr = carsData.filter((info) => info.name === model);
  console.log(modelsArr);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[96%] space-y-10 mb-10 xl:w-[1300px]">
          <h2 className="font-bold textStyle text-[20px] md:text-[30px]">
            Jami {modelsArr.length} ta{" "}
            <span className="text-[#E70A32]">{model}</span> topildi
          </h2>
          <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
            {modelsArr.map((car) => {
              return (
                <Link
                  to={`/sale/${car.mark}/car/${model}/sotib-olish/${car.id}`}
                  key={car.id}
                  className="rounded space-y-3 relative"
                >
                  <div className="image_div relative rounded-lg">
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
                    <div className="bg-gray-200 rounded-lg p-3 hoverd">
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
        </div>
      </div>
      <Aksiyalar />
    </>
  );
};

export default SelectedCars;
