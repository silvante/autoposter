import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { marksIcon } from "../autoPosterData";

import { v4 as uuidv4 } from "uuid";
import Aksiyalar from "./Aksiyalar";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const CarModels = () => {
  // using sparams

  const { mark } = useParams();
  console.log(marksIcon);
  const modelsArr = marksIcon.find((i) => i.mark === mark);
  const found = modelsArr.homManyCars;

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
  const another = modelsArr.homManyCars;

  const [main, setmain] = useState([]);

  const result = main.concat(
    filtered.length === 0 && found,
    filtered2.length === 0 && filtered,
    filtered3.length === 0 && filtered2,
    filtered3
  );

  // siling

  const [min, setMin] = useState();
  const [max, setmax] = useState();

  const minPay = (e) => {
    setMin(e.target.value);
  };

  const maxPay = (e) => {
    setmax(e.target.value);
  };

  const filtered4 = result.filter((e) => e.reCost >= min);
  const filtered5 = filtered4.filter((e) => e.reCost <= max);

  const [main2, setmain2] = useState([]);

  const result2 = main2.concat(filtered5.length === 0 && filtered4, filtered5);
  const result3 = main2.concat(result2.length === 0 ? result : result2);

  const resulted = result3.filter((e) => e !== false);

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

  const STT = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
                  onClick={STT}
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
            <FormControl fullWidth>
              <InputLabel>Model</InputLabel>
              <Select
                id="model"
                label="model"
                className="bg-gray-100 rounded-md outline-none w-full"
                onChange={useModel}
              >
                {Sliced.map((filter) => {
                  return (
                    <MenuItem key={filter.model} value={filter.model}>
                      {filter.model}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Auto yili</InputLabel>
              <Select
                id="yil"
                label="Auto yili"
                className="bg-gray-100 rounded-md outline-none w-full"
                onChange={useYear}
              >
                {years.length === 0 && (
                  <MenuItem disabled>Model tanlang</MenuItem>
                )}
                {years.map((filter) => {
                  return (
                    <MenuItem key={filter} value={filter}>
                      {filter}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Krosover</InputLabel>
              <Select
                id="krosover"
                label="Krosover"
                className="bg-gray-100 rounded-md outline-none w-full"
                onChange={useKros}
              >
                {krosovers.length === 0 && (
                  <MenuItem disabled>Yilini tanlang</MenuItem>
                )}
                {krosovers.map((filter) => {
                  return (
                    <MenuItem key={filter} value={filter}>
                      {filter}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              type="number"
              className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
              onChange={minPay}
              label="Minimum $"
            />
            <TextField
              type="number"
              className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
              onChange={maxPay}
              label="Maximum $"
            />
            <button
              onClick={handleClick}
              className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white text-center"
            >
              {modelSelect === "" &&
              yearSelect === "" &&
              krosSelect === "" &&
              min === undefined &&
              max === undefined
                ? "Automabil topish"
                : `${resulted.length} Auto topildi`}
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
                  to={`/sale/${car.mark}/sotib-olish/${car.id}`}
                  key={car.id}
                  className="rounded space-y-3 relative anime"
                  onClick={STT}
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
