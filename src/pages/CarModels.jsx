import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { marksIcon } from "../autoPosterData";

import { v4 as uuidv4 } from "uuid";
import Aksiyalar from "./Aksiyalar";

const CarModels = () => {
  // using sparams

  const { mark } = useParams();
  const modelsArr = marksIcon.find((i) => i.mark === mark);
  const found = modelsArr.elems;

  // filtering arr models
  const [modelSelect, setModel] = useState("");

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

  const useModel = (e) => {
    setModel(e.target.value);
  };

  const filtered = found.filter((e) => e.name == modelSelect);

  // filtering by years
  const [yearSelect, setYear] = useState("");

  const useYear = (e) => {
    setYear(e.target.value);
  };

  function setYearsToArr(arr) {
    let years = new Set();
    arr.forEach((item) => {
      let year = item.year;
      years.add(year);
    });
    let yearsArr = Array.from(years);
    return yearsArr;
  }

  const years = setYearsToArr(filtered);

  const filtered2 = filtered.filter((e) => e.year == yearSelect);

  // filter by krosover
  const [krosSelect, setkros] = useState("");

  const useKros = (e) => {
    setkros(e.target.value);
  };

  function setkrosoverToArr(arr) {
    let krosovers = new Set();
    arr.forEach((item) => {
      let krosover = item.krosover;
      krosovers.add(krosover);
    });
    let krosoverArr = Array.from(krosovers);
    return krosoverArr;
  }

  const krosovers = setkrosoverToArr(filtered2);

  const filtered3 = filtered2.filter((e) => e.krosover == krosSelect);

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

  // siling

  const [min, setMin] = useState("");
  const [max, setmax] = useState("");

  const minPay = (e) => {
    setMin(e.target.value);
  };

  const maxPay = (e) => {
    setmax(e.target.value);
  };

  const filtered4 = filtered3.filter((e) => e.reCost <= max);
  const filtered5 = filtered4.filter((e) => e.reCost >= min);

  // console.log(filtered);
  // console.log(filtered2);
  // console.log(filtered3);
  // console.log(filtered4);
  // console.log(filtered5);

  const [main, setmain] = useState([]);

  const result = main.concat(
    filtered2.length === 0 && filtered,
    filtered3.length === 0 && filtered2,
    filtered4.length === 0 && filtered3,
    filtered5.length === 0 && filtered4,
    filtered5
  );

  const resulted = result.filter((e) => e !== false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sale/${modelsArr.mark}/filter`, { state: { resulted } });
  };

  // functions of pagination

  const [firstindex, setfirstindex] = useState(1);
  const [lastindex, setlastindex] = useState(6);

  const lastPost = firstindex * lastindex;
  const firstPost = lastPost - lastindex;

  const slicedCards = found.slice(firstPost, lastPost);

  const NumberOfPages = [];

  for (let i = 0; i <= Math.ceil(found.length / lastindex); i++) {
    NumberOfPages.push(i);
  }

  const paginationArr = NumberOfPages.filter((prev) => prev !== 0);

  return (
    <>
      {/* car model cards */}

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
                  to={`/sale/${modelsArr.mark}/car/${model.model}`}
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

      {/* cars filtering card */}

      <div className="w-full flex justify-center">
        <div className="w-[96%] mb-10 xl:w-[1300px]">
          <div className="grid grid-cols-1 shadow-xl rounded-lg p-5 border gap-5 md:grid-cols-3">
            <div className="text-center space-y-2">
              <p className="fontStyle font-bold">Model</p>
              <select
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none w-full"
                onChange={useModel}
              >
                <option value="model" disabled selected>
                  Model
                </option>
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
                <option value="year" disabled selected>
                  year
                </option>
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
                <option value="krosover" disabled selected>
                  krosover
                </option>
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
              onClick={handleClick}
              className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white text-center"
            >
              Automabil topish
            </button>
          </div>
        </div>
      </div>

      {/* pagination */}

      <div className="w-full flex justify-center py-5">
        <div className="w-[96%] space-y-10 xl:w-[1300px]">
          <h2 className="font-bold textStyle text-[20px] md:text-[30px]">
            Barcha <span className="text-[#E70A32]">{modelsArr.mark}</span>{" "}
            aotomobillari
          </h2>
          <div className="grid grid-cols-1 gap-[40px] lg:gap-5 xl:gap-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 sm:grid-cols-2">
            {slicedCards.map((car) => {
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

          {/* pagination navigate */}

          <div className="space-x-2 flex justify-center">
            {paginationArr.map((page, index) => {
              return (
                <button
                  key={page}
                  className={`myPadding bg-[#E70A32] border-[#E70A32] text-white border-2 rounded-full ${
                    page === firstindex && "px-8"
                  }`}
                  onClick={() => setfirstindex(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Aksiyalar />
    </>
  );
};

export default CarModels;
