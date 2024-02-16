import React, { useState } from "react";
import bgPng from "../assets/images/bg.png";
import pro1 from "../assets/images/property1.png";
import pro2 from "../assets/images/property2.png";
import pro3 from "../assets/images/property3.png";
import bank1 from "../assets/images/bank1.png";
import bank2 from "../assets/images/bank2.png";
import bank3 from "../assets/images/bank3.png";
import bank4 from "../assets/images/bank4.png";
import { carsData, marks } from "../autoPosterData";
import "../pages/send.js";
import { Link, useNavigate } from "react-router-dom";
import ADimg from "../assets/images/ad.png";
import Massange from "../components/Massange.jsx";

const Kredit = () => {
  const [shows, setShows] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[96%] xl:w-[1300px] flex flex-col justify-between items-start lg:flex-row">
          <div className="w-full space-y-5 lg:w-[68%]">
            <div className="space-y-5">
              <img src={bgPng} alt="bg image" className="w-full" />
              <p className="fontStyle font-bold text-[18px]">
                Shuningdek, foydalanuvchi xatti-harakatlarining asosiy
                stsenariylari marketingning aql ustidan g'alaba qozonishining
                kvintessensiyasidan boshqa narsa emas va ular o'zlarining
                oqilona chegaralarida bloklanishi kerak. Bizning holatimiz
                ko'rinadigan darajada aniq emas: keng ko'lamli aktivlar bilan
                maslahatlashuv har bir ishtirokchini rivojlanish modeli bo'yicha
                o'z qarorlarini qabul qilish qobiliyatini aniq belgilaydi.
              </p>
              <button
                className="bg-[#E70A32] text-white py-3 px-10 rounded"
                onClick={() => setShows(true)}
              >
                Qatnashish →
              </button>
            </div>
            <div className="space-y-5">
              <h3 className="textStyle text-[30px]">Bizning afzalliklarimiz</h3>
              <div className="flex justify-center flex-wrap gap-10">
                <div className="p-8 space-y-7 shadow-lg rounded-md w-[250px]">
                  <img src={pro3} alt="property one" />
                  <p className="textStyle text-[20px]">birinch tolov 0% dan</p>
                  <p className="fontStyle">
                    Va shuningdek, asosiy xatti-harakatlar stsenariylari
                    foydalanuvchilar ifodalaydi.
                  </p>
                </div>
                <div className="p-8 space-y-7 shadow-lg rounded-md w-[250px]">
                  <img src={pro2} alt="property two" />
                  <p className="textStyle text-[20px]">Kam siyosiy document</p>
                  <p className="fontStyle">
                    Va shuningdek, asosiy xatti-harakatlar stsenariylari
                    foydalanuvchilar ifodalaydi.
                  </p>
                </div>
                <div className="p-8 space-y-7 shadow-lg rounded-md w-[250px]">
                  <img src={pro1} alt="property three" />
                  <p className="textStyle text-[20px]">
                    Automobil garantiyasi 1 yil
                  </p>
                  <p className="fontStyle">
                    Va shuningdek, asosiy xatti-harakatlar stsenariylari
                    foydalanuvchilar ifodalaydi.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="textStyle text-[30px]">Xamkor banklar</h3>
              <div className="flex justify-center flex-wrap gap-10">
                <img src={bank1} alt="Sber bank" className="w-[190px]" />
                <img src={bank2} alt="tinkoff" className="w-[190px]" />
                <img src={bank3} alt="Alfa bank" className="w-[190px]" />
                <img src={bank4} alt="gazpro bank" className="w-[190px]" />
              </div>
            </div>
          </div>
          <Massange />
        </div>
      </div>
      {shows && (
        <div className="w-full full-height fixed bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div
            className="bg-white rounded-[12px] flex flex-col space-x-5 justify-center sm:flex-row"
            data-aos="zoom-in"
          >
            <img src={ADimg} className="w-[260px]" alt="adverticement image" />
            <div className="w-[90%] py-5 sm:p-5 sm:w-[380px]">
              <div className="mb-5">
                <p className="text-[32px] font-900 textStyle">
                  Ushbu event da qatnashish!
                </p>
                <p className="text-[18px] fontStyle">
                  Ushbu eventda qatnashish uchun{" "}
                  <span className="font-bold">Automobul </span> sotib olishingiz
                  kerak.
                </p>
              </div>
              <Link
                onClick={handleClick}
                to={"/"}
                className="text-white py-3 w-full bg-[#E70A32] rounded inline-block text-center"
              >
                Bosh sahifaga qaytish
              </Link>
            </div>
          </div>
          <Link
            onClick={() => setShows(false)}
            className="text-white text-4xl fixed top-5 right-5"
          >
            <i class="bx bx-x"></i>
          </Link>
        </div>
      )}
    </>
  );
};

export default Kredit;
