import React, { useState } from "react";
import Advises from "../components/Advises";

import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import { Link } from "react-router-dom";

import { carsData } from "../autoPosterData";
import "../autoPosterData";
import { marks } from "../autoPosterData";

const Katalog = () => {
  const [first, setfirst] = useState(1);
  const [last, setlast] = useState(8);

  const lastIndex = first * last;
  const firstIndex = lastIndex - last;

  const carsSlicedArr = carsData.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 0; i <= Math.ceil(carsData.length / last); i++) {
    pages.push(i);
  }

  const numberOfPages = pages.filter((e) => e !== 0);

  if (first < 1) {
    setfirst(numberOfPages.length);
  } else if (first > numberOfPages.length) {
    setfirst(1);
  }

  const [mark, setmark] = useState("");

  const useMark = (e) => {
    setmark(e.target.value);
  };

  const filter = carsData.filter((e) => e.mark === mark);

  function setModulToArr(arr) {
    let models = new Set();
    arr.forEach((item) => {
      let model = item.name;
      models.add(model);
    });
    let modellar = Array.from(models);
    return modellar;
  }

  const models = setModulToArr(filter);

  const [model, setmodel] = useState("");

  const useModel = (e) => {
    setmodel(e.target.value);
  };

  const filter2 = filter.filter((e) => e.model === model);

  console.log(filter2);

  // filter funktion

  return (
    <div className="w-full flex justify-center">
      <div className="w-[96%] xl:w-[1300px] mb-20 space-y-5">
        <div className="w-full justify-between items-center">
          <h3 className="text-black textStyle text-[20px] lg:text-[30px]">
            Katalog
          </h3>
        </div>
        <div className="w-full flex justify-between items-start">
          <div className="w-[68%] space-y-10">
            <div className="grid grid-cols-1 shadow-xl rounded-lg p-5 border gap-5 md:grid-cols-3">
              <div className="text-center space-y-2">
                <p className="fontStyle font-bold">marka</p>
                <select
                  className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                  onChange={useMark}
                >
                  <option value="model">marka</option>
                  {marks.map((filter) => {
                    return (
                      <option key={filter} value={filter}>
                        {filter}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="text-center space-y-2">
                <p className="fontStyle font-bold">Model</p>
                <select
                  className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                  onChange={useModel}
                >
                  <option value="year">model</option>
                  {models.map((filter) => {
                    return (
                      <option key={filter} value={filter}>
                        {filter}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="text-center space-y-2">
                <p className="fontStyle font-bold">Auto yili</p>
                <select className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full">
                  <option value="krosover">2024</option>
                  {/* {krosovers.map((filter) => {
                        return (
                          <option key={filter} value={filter}>
                            {filter}
                          </option>
                        );
                      })} */}
                </select>
              </div>
              <input
                type="number"
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
                placeholder="Max Bujet $"
                // onChange={maxPay}
              />
              <input
                type="number"
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
                placeholder="Min Bujet $"
                // onChange={minPay}
              />
              <button
                // onClick={handleClick}
                className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white text-center"
              >
                Automabil topish
              </button>
            </div>
            <div className="w-full space-y-5">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                  Automobillar
                </h3>
                <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                  jami <span className="text-[#e70a32]">{carsData.length}</span>{" "}
                  ta
                </h3>
              </div>
              <div className="w-full space-y-5">
                {carsSlicedArr.map((car) => {
                  return (
                    <Link
                      key={car.id}
                      className="w-full rounded-lg border p-3 flex gap-5 myTransition hover:shadow-xl hover:scale-105 anime"
                    >
                      <div className="overflow-hidden w-56 h-36 flex items-center justify-center rounded-md">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h2 className="textStyle font-bold text-xl">
                          <span className="text-[#e70a32]">{car.mark}</span>{" "}
                          {car.name}
                        </h2>
                        <p className="fontStyle font-bold">
                          {car.numberOfusers} foidalanuvchi • {car.year} yil
                        </p>
                        <p className="fontStyle font-bold">info:</p>
                        <p className="fontStyle">
                          probeg: {car.probeg} km, yili {car.year} , benzin{" "}
                          {car.benzin} l.c , krosover {car.krosover}
                        </p>
                        <h2 className="textStyle text-2xl">
                          {car.reCost}${" "}
                          <span className="text-xl text-gray-500 line-through">
                            {car.reCost}$
                          </span>
                        </h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex space-x-5 justify-center items-center">
                <button
                  onClick={() => setfirst(first - 1)}
                  className="prev h-10 bg-[#e70a32] px-5 rounded-full text-white disabled:opacity-80"
                >
                  prev
                </button>
                <p className="fontStyle font-bold">
                  {first} / {numberOfPages.length}
                </p>
                <button
                  onClick={() => setfirst(first + 1)}
                  className="next h-10 bg-[#e70a32] px-5 rounded-full text-white disabled:opacity-80"
                >
                  next
                </button>
              </div>
            </div>
          </div>

          <div className="w-[30%] stick">
            <div className="w-full flex items-center justify-center flex-wrap space-y-5 lg:justify-between">
              <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px] shadow-md">
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
                    className={
                      "text-[#E70A32] inline-block fontStyle text-[18px]"
                    }
                  >
                    Qatnashish →
                  </Link>
                </div>
              </div>
              <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px] shadow-md">
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
                    className={
                      "text-[#E70A32] inline-block fontStyle text-[18px]"
                    }
                  >
                    Qatnashish →
                  </Link>
                </div>
              </div>
              <div className="p-6 relative w-[400px] bg-white rounded-md h-[200px] shadow-md">
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
                    className={
                      "text-[#E70A32] inline-block fontStyle text-[18px]"
                    }
                  >
                    Qatnashish →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
