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
import Modul from "../components/Modul";

const Kredit = () => {

  const [shows, setShows] = useState(false);

  return (
    <div className="w-full flex justify-center mb-10">
      <div className="w-[96%] xl:w-[1300px] flex flex-col justify-between items-start lg:flex-row">
        <div className="w-full space-y-5 lg:w-[68%]">
          <div className="space-y-5">
            <img src={bgPng} alt="bg image" className="w-full" />
            <p className="fontStyle font-bold text-[18px]">
              Shuningdek, foydalanuvchi xatti-harakatlarining asosiy
              stsenariylari marketingning aql ustidan g'alaba qozonishining
              kvintessensiyasidan boshqa narsa emas va ular o'zlarining oqilona
              chegaralarida bloklanishi kerak. Bizning holatimiz ko'rinadigan
              darajada aniq emas: keng ko'lamli aktivlar bilan maslahatlashuv
              har bir ishtirokchini rivojlanish modeli bo'yicha o'z qarorlarini
              qabul qilish qobiliyatini aniq belgilaydi.
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
              <img src={bank1} alt="Sber bank" className="w-[190px]"/>
              <img src={bank2} alt="tinkoff" className="w-[190px]"/>
              <img src={bank3} alt="Alfa bank" className="w-[190px]"/>
              <img src={bank4} alt="gazpro bank" className="w-[190px]"/>
            </div>
          </div>
        </div>
        <div className="p-8 w-full shadov rounded-lg text-center stick lg:w-[30%]">
          <h3 className="textStyle text-[24px]">Automobilga kredit olish</h3>
          <form className="space-y-3">
            <select
              defaultValue={"marka"}
              className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
            >
              {marks.map((car) => {
                return <option value={car}>{car}</option>;
              })}
            </select>
            <select
              defaultValue={"model"}
              className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
            >
              <option selected value="Model">
                Model
              </option>
              {carsData.map((car) => {
                <option value={car.name}>{car.name}</option>;
              })}
            </select>
            <textarea
              className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100 appearance-none resize-none"
              placeholder="comment"
            ></textarea>
          </form>
          <br />
          <h3 className="textStyle text-[18px] text-left">
            malumotingizni kiriting
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Ismingiz..."
              className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
            />
            <input
              type="number"
              className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
            />
          </form>
          <br />
          <button className="w-full bg-[#E70A32] text-white py-3 rounded mb-3 ">
            Arizangizni yuboring
          </button>
          <p className="fontStyle text-[12px] text-gray-500">
            Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga
            rozilik bildirasiz
          </p>
        </div>
      </div>
      {shows && <Modul shows={shows} />}
    </div>
  );
};

export default Kredit;
