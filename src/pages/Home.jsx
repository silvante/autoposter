import React, { Fragment, useState } from "react";
import Sort from "../components/Sort";
import { carsData } from "../autoPosterData";
import { Link, useLoaderData } from "react-router-dom";
import BestOfYear from "../components/BestOfYear";
import Advises from "../components/Advises";
import { Result } from "postcss";
// import {inpValue}

const Home = () => {
  const newArray = carsData.sort((a, b) => b.year - a.year);

  const sortArr = newArray.slice(0, 6);

  const [inputValue, setValue] = useState("");

  const getValue = (e) => {
    setValue(e.target.value);
  };

  const filterCarsByMark = (carsData) => {
    if (inputValue.trim() === "") {
      return true;
    }
    return carsData.mark.toLowerCase().includes(inputValue.toLowerCase());
  };
  const filterCars = carsData.filter(filterCarsByMark);

  const filterCarsBySearch = (carsData) => {
    if (inputValue.trim() === "") {
      return true;
    }
    return carsData.name.toLowerCase().includes(inputValue.trim().toLowerCase());
  };
  const filteredCars = carsData.filter(filterCarsBySearch);

  return (
    <Fragment>
      <div className="bg-sans py-10 flex justify-center items-center xl:h-[350px]">
        <div className="w-full h-full bg-black opasity"></div>
        <div className="w-[96%] z-10 xl:w-[1300px] space-y-5">
          <h1 className="font-bold text-white textStyle text-[25px] sm:text-[35px] md:text-[45px] xl:text-[60px]">
            Avto omborni yakuniy tugatish!
            <br /> 15 aprelgacha!
          </h1>
          <div className="w-full h-[50px] bg-white rounded-md overflow-hidden flex items-center justify-between">
            <input
              onChange={getValue}
              type="text"
              placeholder="Nomi boyicha automobil qidirish..."
              className="w-[80%] md:w-[90%] h-full px-5 outline-none "
            />
            <button
              onClick={() => setSearchPunk(true)}
              className="w-[20%] md:w-[10%] h-full bg-[#E70A32] text-white text-[18px] rounded-md"
            >
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
      {inputValue == "" && (
        <div className="bg-white anime">
          <Sort />
          <div className="w-full flex justify-center">
            <div className="w-[96%] space-y-10 mb-10 xl:w-[1300px]">
              <h2 className="font-bold textStyle text-[30px]">
                Yangi Avlod Automobillari...
              </h2>
              <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
                {sortArr.map((car) => {
                  return (
                    <Link
                      to={`sotib-olish/${car.id.toString()}`}
                      key={car.id}
                      className="rounded space-y-3 relative"
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
                          <span className="text-black font-bold">
                            {car.name}
                          </span>{" "}
                          • {car.year}
                        </p>
                        <p className="text-gray-500 fontStyle text-[18px] font-bold">
                          {car.year} yil , {car.probeg} km, Krosoveri{" "}
                          {car.krosover} l, benzini {car.benzin} l.s
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
                            {car.kredit
                              ? `${car.kredit}$`
                              : "kredit ga Tolov yo'q"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <BestOfYear />
          <Advises />
        </div>
      )}
      {inputValue != "" && filteredCars.length > 0 && (
        <div className="w-[96%] mx-auto xl:w-[1300px] py-16 space-y-10 anime">
          <h3 className="font-bold textStyle text-[30px]">
            Sorov boyicha <span className="text-[#E70A32]">automobillar</span>
          </h3>
          <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
            {filteredCars.map((car) => {
              return (
                <Link
                  to={`sotib-olish/${car.id.toString()}`}
                  key={car.id}
                  className="rounded space-y-3 relative"
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
        </div>
      )}
      {filteredCars.length === 0 && (
        <div className="w-full text-center py-24 space-y-5 anime">
          <h1 className="text-gray-500 text-[70px]">(┬┬﹏┬┬)</h1>
          <p className="text-gray-500 text-[28px]">
            Sorov boyicha Aoutomobil topilmadi
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
