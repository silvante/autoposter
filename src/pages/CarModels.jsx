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
  const [min, setMin] = useState("");
  const [max, setmax] = useState("");

  const useModel = (e) => {
    setModel(e.target.value);
  };

  const useYear = (e) => {
    setYear(e.target.value);
  };

  const useKros = (e) => {
    setkros(e.target.value);
  };

  const minPay = (e) => {
    setMin(e.target.value);
  };

  const maxPay = (e) => {
    setmax(e.target.value);
  };

  const filtered = found.filter((e) => e.name == modelSelect);
  const filtered2 = filtered.filter((e) => e.year == yearSelect);
  const filtered3 = filtered2.filter((e) => e.krosover == krosSelect);

  const dolt = () => {
    const filterPlease = found.filter((e) => {
      e.name.toString() == modelSelect.toString() ||
        e.year.toString() == +yearSelect.toString() ||
        e.krosover.toString() == +krosSelect.toString();
    });
  };

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
              <select
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                onChange={useYear}
              >
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
              <select
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                onChange={useKros}
              >
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
              onChange={maxPay}
            />
            <input
              type="number"
              className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
              placeholder="Min Bujet $"
              onChange={minPay}
            />
            <button
              onClick={dolt}
              className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white"
            >
              Automabil topish
            </button>
          </div>
        </div>
      </div>
      <Aksiyalar />
    </>
  );
};

export default CarModels;
