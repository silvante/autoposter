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
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ADimg from "../assets/images/ad.png";

const Kredit = () => {
  const [shows, setShows] = useState(false);

  const [open, setOpen] = React.useState(0);
  const [link, setlink] = useState("https://auto-poster.netlify.app/");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mark, setmark] = useState("");
  const [model, setmodel] = useState("");
  const [massange, setmassange] = useState("");
  const [error, setError] = useState("");

  const modelArr = carsData.filter((e) => e.mark === mark);

  function setModelToArray(arr) {
    let models = new Set();
    arr.forEach((item) => {
      let model = item.name;
      models.add(model);
    });
    let ModelsArr = Array.from(models);
    return ModelsArr;
  }

  const models = setModelToArray(modelArr);

  console.log(models);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      mark === "" ||
      model === "" ||
      massange === ""
    ) {
      alert("Iltimos malumotni to'ldiring");
    } else {
      alert("Malumot yuborildi");
      const telegram_bot_id = "6385516963:AAFFX6rdrEn75OwlNSCR4Gkus-L3mVX0S5o";
      const chat_id = "6940337371";

      const telegramMessage = `
      ${link} rasmiy saytiga "${mark} ${model}" nomi automobil uchun kredit xujjatlashtirish uchun yangi foidalanuvchi sorov yubordi 📌\n\n foidalanuvchi Ismi: ${name}\n foidalanuvchi Email: ${email}\n\n foidalanuvhi izohi boyicha:\n ${massange}\n\n foidalanuvchini 👤 sorovini korib chiqish talab qilinadi ✅
      `;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          console.log(response.data);
          setName("");
          setEmail("");
          setmark("");
          setmodel("");
          setmassange("");
        });
      // .catch((error) => {
      //   console.error(error);
      // });
    }
    if (!validateEmail(email)) {
      setError("Hatolik! Malumot email formatida emas");
      return;
    }
  };

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
          <div className="p-8 w-full shadov rounded-lg text-center stick lg:w-[30%]">
            <h3 className="textStyle text-[24px]">Automobilga kredit olish</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                defaultValue={"marka"}
                className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                onChange={(e) => setmark(e.target.value)}
                value={mark}
              >
                <option value={""} selected disabled>
                  mark
                </option>
                {marks.map((car) => {
                  return (
                    <option key={car} value={car}>
                      {car}
                    </option>
                  );
                })}
              </select>
              <select
                defaultValue={"model"}
                className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                onChange={(e) => setmodel(e.target.value)}
                value={model}
              >
                {models.length === 0 && (
                  <option value={""}>marka tanlang</option>
                )}
                {models.length !== 0 &&
                  models.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
              </select>
              <textarea
                className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100 appearance-none resize-none"
                placeholder="izoxingiz..."
                onChange={(e) => setmassange(e.target.value)}
                value={massange}
              ></textarea>
              <br />
              <h3 className="textStyle text-[18px] text-left mb-4">
                malumotingizni kiriting
              </h3>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                type="text"
                placeholder="toliq ismingizni kiriting"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                type="email"
                placeholder="Email"
              />
              {error}

              <button
                type="submit"
                className="py-3 bg-[#e70a32] w-full rounded-md text-white"
              >
                sorovni jonatish
              </button>
            </form>

            <br />
            <p className="fontStyle text-[12px] text-gray-500">
              Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga
              rozilik bildirasiz
            </p>
          </div>
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
