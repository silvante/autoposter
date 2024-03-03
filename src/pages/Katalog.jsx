import React, { useEffect, useState } from "react";
import Advises from "../components/Advises";

import card1 from "../assets/images/card1.avif";
import card2 from "../assets/images/card2.avif";
import card3 from "../assets/images/card3.avif";
import { Link } from "react-router-dom";

import { carsData } from "../autoPosterData";
import "../autoPosterData";
import { marks } from "../autoPosterData";
import Massange from "../components/Massange";
import { Result } from "postcss";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Katalog = () => {
  // filter by mark

  const [mark, setmark] = useState("");

  const useMark = (e) => {
    setmark(e.target.value);
  };

  const filter = carsData.filter((e) => e.mark === mark);

  // filter by model

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

  const filter2 = filter.filter((e) => e.name === model);

  // filter by year

  const [year, setyear] = useState();

  const useYear = (e) => {
    setyear(e.target.value);
  };

  function setyearToArr(arr) {
    let years = new Set();
    arr.forEach((item) => {
      let year = item.year;
      years.add(year);
    });
    let yillar = Array.from(years);
    return yillar;
  }

  const years = setyearToArr(filter2);

  const filter3 = filter2.filter((e) => e.year === +year);

  const [main, setmain] = useState([]);

  const result = main.concat(
    filter.length === 0 && carsData,
    filter2.length === 0 && filter,
    filter3.length === 0 && filter2,
    filter3
  );

  // filter by maxPay

  const [max, setmax] = useState();

  const maxPay = (e) => {
    setmax(e.target.value);
  };

  // filter my minPay

  const [min, setmin] = useState();

  const minPay = (e) => {
    setmin(e.target.value);
  };

  const filter4 = result.filter((e) => e.reCost >= min);
  const filter5 = filter4.filter((e) => e.reCost <= max);
  const filter6 = result.filter((e) => e.reCost <= max);

  const [index, setindex] = useState([]);

  const result2 = index.concat(
    filter5.length === 0 && filter4,
    filter4.length === 0 && filter6,
    filter5
  );
  const result3 = index.concat(
    result2.length === 0 && max === undefined && min === undefined
      ? result
      : result2
  );

  const resulted = result3.filter((e) => e !== false);
  // result play

  const [show, setshow] = useState(false);

  // pagination of cars

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
  const Minus = () => {
    setfirst(first - 1);
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  };
  const Plus = () => {
    setfirst(first + 1);
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  };
  const STT = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  console.log(filter);
  console.log(filter2);
  console.log(filter3);
  console.log(filter4);
  console.log(filter5);
  console.log(result);
  console.log(result2);
  console.log(result3);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[96%] xl:w-[1300px] mb-20 space-y-5">
        <div className="w-full justify-between items-center">
          <h3 className="text-black textStyle text-[20px] lg:text-[30px]">
            Katalog
          </h3>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">
          <div className="w-full lg:w-[68%] space-y-10">
            {/* filter */}

            <div className="grid grid-cols-1 shadow-xl rounded-lg p-5 border gap-5 md:grid-cols-3">
              <div className="text-center space-y-2">
                <FormControl fullWidth>
                  <InputLabel id="mark">Marka</InputLabel>
                  <Select
                    className="bg-gray-100 rounded-md outline-none w-full text-start"
                    onChange={useMark}
                    label="Marka"
                  >
                    {marks.map((filter) => {
                      return (
                        <MenuItem key={filter} value={filter}>
                          {filter}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="text-center space-y-2">
                <FormControl fullWidth>
                  <InputLabel id="model">Model</InputLabel>
                  <Select
                    className="bg-gray-100 rounded-md outline-none w-full text-start"
                    onChange={useModel}
                    label="Model"
                  >
                    {models.length === 0 && (
                      <MenuItem disabled>Marka tanlang</MenuItem>
                    )}
                    {models.map((filter) => {
                      return (
                        <MenuItem key={filter} value={filter}>
                          {filter}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="text-center space-y-2">
                <FormControl fullWidth>
                  <InputLabel id="model">Model</InputLabel>
                  <Select
                    className="bg-gray-100 rounded-md outline-none w-full text-start"
                    onChange={useYear}
                    label="Auto yili"
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
              </div>
              <TextField
                label="Minimum $"
                type="number"
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
                onChange={minPay}
              />
              <TextField
                label="Maximum $"
                type="number"
                className="border-2 bg-gray-100 py-3 px-5 rounded-md outline-none"
                onChange={maxPay}
              />
              <button
                onClick={() => setshow(true)}
                className="bg-[#E70A32] border-none py-3 px-5 rounded-md outline-none text-white text-center"
              >
                {mark === "" &&
                model === "" &&
                year === undefined &&
                min === undefined &&
                max === undefined
                  ? "Automabil topish"
                  : `${resulted.length} Auto topildi`}
              </button>
            </div>

            {/* Auto show and pagination */}

            {!show && (
              <div className="w-full space-y-5">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                    Automobillar
                  </h3>
                  <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                    jami{" "}
                    <span className="text-[#e70a32]">{carsData.length}</span> ta
                  </h3>
                </div>
                <div className="w-full space-y-5">
                  {carsSlicedArr.map((car) => {
                    return (
                      <Link
                        to={`/katalog/${car.id}`}
                        key={car.id}
                        onClick={STT}
                        className="w-full rounded-lg border p-3 flex flex-col sm:flex-row gap-5 myTransition hover:shadow-xl hover:scale-105 anime"
                      >
                        <div className="bg-gray-400 overflow-hidden w-full h-48 sm:h-36 sm:w-56 flex items-center justify-center rounded-md">
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
                              {car.cost}$
                            </span>
                          </h2>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex space-x-5 justify-center items-center">
                  <button
                    onClick={Minus}
                    className="prev h-10 bg-[#e70a32] px-5 rounded-full text-white disabled:opacity-80"
                  >
                    prev
                  </button>
                  <p className="fontStyle font-bold">
                    {first} / {numberOfPages.length}
                  </p>
                  <button
                    onClick={Plus}
                    className="next h-10 bg-[#e70a32] px-5 rounded-full text-white disabled:opacity-80"
                  >
                    next
                  </button>
                </div>
              </div>
            )}

            {/* filter results */}

            {show && (
              <div className="w-full space-y-5">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                    Filter natijasi
                  </h3>
                  <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                    jami{" "}
                    <span className="text-[#e70a32]">{resulted.length}</span> ta
                  </h3>
                </div>
                <div className="w-full space-y-5">
                  {resulted.map((car) => {
                    return (
                      <Link
                        to={`/katalog/${car.id}`}
                        key={car.id}
                        onClick={STT}
                        className="w-full rounded-lg border p-3 flex flex-col sm:flex-row gap-5 myTransition hover:shadow-xl hover:scale-105 anime"
                      >
                        <div className="bg-gray-400 overflow-hidden w-full h-44 sm:w-56 sm:h-36 flex items-center justify-center rounded-md">
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
                              {car.cost}$
                            </span>
                          </h2>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                {resulted.length === 0 && (
                  <div className="w-full text-center py-24 space-y-5 anime">
                    <h1 className="text-gray-500 text-[70px]">(┬┬﹏┬┬)</h1>
                    <p className="text-gray-500 text-[20px] md:text-[28px]">
                      Filter malumoti boyicha automobil yoq!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* <div className="w-full lg:w-[30%] stick"> */}
          <Massange />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Katalog;
