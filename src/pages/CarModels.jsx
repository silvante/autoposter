import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { marksIcon } from "../autoPosterData";

import { v4 as uuidv4 } from "uuid";
import Aksiyalar from "./Aksiyalar";

const CarModels = () => {
  // using sparams

  const { mark } = useParams();
  const modelsArr = marksIcon.find((i) => i.mark === mark);
  const found = modelsArr.elems;

  // filtering arr models

  function setModulToArr(arr) {
    let models = new Set();
    arr.forEach((item) => {
      let model = item.name;
      models.add(model);
    });
    let modellar = Array.from(models);
    return modellar;
  }

  const models = setModulToArr(found);

  function setYearsToArr(arr) {
    let years = new Set();
    arr.forEach((item) => {
      let year = item.year;
      years.add(year);
    });
    let yearsArr = Array.from(years);
    return yearsArr;
  }

  const years = setYearsToArr(found);

  function setkrosoverToArr(arr) {
    let krosovers = new Set();
    arr.forEach((item) => {
      let krosover = item.krosover;
      krosovers.add(krosover);
    });
    let krosoverArr = Array.from(krosovers);
    return krosoverArr;
  }

  const krosovers = setkrosoverToArr(found);

  // adding a lenth of models

  const modelsArray = models.map((item, index) => {
    let returned = {
      model: item,
      id: uuidv4(),
      array: found.filter((car) => {
        if (car.name == item) {
          return car.name;
        }
      }),
    };
    return returned;
  });

  // slicing the array

  const [number, setNumber] = useState(15);
  const Sliced = modelsArray.slice(0, number);
  const [showbtn, setShowBtn] = useState(true);
  const another = modelsArr.elems;
  const [sixSlice, setSixSlice] = useState(6);
  const elems = another.slice(0, sixSlice);
  const [btn, setbtn] = useState(true);

  // siling

  const [modelSelect, setModel] = useState("");
  const [yearSelect, setYear] = useState("");
  const [krosSelect, setkros] = useState("");

  const useModel = (e) => {
    setModel(e.target.value);
  };

  console.log(modelSelect);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[96%] mb-10 xl:w-[1300px]">
          <div className="flex flex-col justify-between items-center mb-10 sm:flex-row">
            <h3 className="textStyle text-[20px] flex md:text-[25px] items-center">
              Barcha{""}
              <img
                src={modelsArr.icon}
                alt={modelsArr.mark}
                className="mx-2 w-[40px]"
              />{" "}
              {modelsArr.mark} Modellari
            </h3>
            <h3 className="textStyle text-[20px] md:text-[25px]">
              jami {another.length} ta
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Sliced.map((model) => {
              return (
                <Link
                  key={model.id}
                  className="grey-border flex items-center justify-between p-3 rounded cursor-pointer shrink-0 hoverd"
                  to={`/mark/${model.model}`}
                >
                  <p>{model.model}</p>
                  <p>{model.array.length}</p>
                </Link>
              );
            })}
          </div>
          {showbtn ? (
            <button
              className="text-[#E70A32]"
              onClick={() => setNumber() + 999 || setShowBtn(false)}
            >
              Barcha modellarni korsatish →
            </button>
          ) : (
            <p className="text-[#E70A32]">Boshqa modellar yoq</p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[96%] mb-10 xl:w-[1300px]">
          <div className="grid grid-cols-1 shadow-xl rounded-lg p-5 border gap-5 md:grid-cols-3">
            <div className="text-center space-y-2">
              <p className="fontStyle font-bold">Model</p>
              <select
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                onChange={useModel}
              >
                {Sliced.map((filter) => {
                  return (
                    <option key={filter.model} value={filter.model}>
                      {filter.model}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="text-center space-y-2">
              <p className="fontStyle font-bold">Mashina yili</p>
              <select className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full">
                {years.map((filter) => {
                  return (
                    <option key={filter} value={filter}>
                      {filter}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="text-center space-y-2">
              <p className="fontStyle font-bold">Krosoveri</p>
              <select className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full">
                {krosovers.map((filter) => {
                  return (
                    <option key={filter} value={filter}>
                      {filter}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="number"
              className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
              placeholder="Max Bujet $"
            />
            <input
              type="number"
              className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
              placeholder="Min Bujet $"
            />
            <button className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white">
              Automabil topish
            </button>
          </div>
        </div>
      </div>

      <div className="w-[96%] xl:w-[1300px] mx-auto space-y-10 mb-10">
        <div className="textStyle text-[20px] flex md:text-[25px] items-center">
          <h3>
            Barcha <span className="text-[#E70A32]">{modelsArr.mark}</span>{" "}
            automobillar.
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
          {elems.map((car) => {
            return (
              <Link
                to={`/mark/model/sotib-olish/${car.id.toString()}`}
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
        <div className="w-full flex justify-center">
          {btn && (
            <button
              className="bg-[#E70A32] text-white px-10 py-3 rounded-md mx-auto"
              onClick={() => setSixSlice(Infinity) || setbtn(false)}
            >
              Barcha Automobillar
            </button>
          )}
          {!btn && (
            <button
              className="bg-[#E70A32] text-white px-10 py-3 rounded-md mx-auto"
              onClick={() => setSixSlice(6) || setbtn(true)}
            >
              barchasini Yopish
            </button>
          )}
        </div>
      </div>
      <Aksiyalar />
    </>
  );
};

export default CarModels;
