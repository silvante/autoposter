import React from "react";
import { useParams } from "react-router-dom";
import { carsData } from "../autoPosterData";

const Buycar = () => {
  const { id } = useParams();
  const datail = carsData.find((car) => car.id == id);
  return (
    <div className="w-full flex justify-center mb-24">
      <div className="w-[90%] space-y-5 xl:w-[1300px]">
        <div className="w-full flex flex-col justify-between items-center sm:flex-row">
          <h3 className="text-black textStyle text-[20px] lg:text-[30px]">
            {datail.mark} {datail.name}
            <span className="text-gray-400 fontStyle font-bold">
              {" "}
              • {datail.year}
            </span>
          </h3>
          <h3 className="text-black textStyle text-[20px] lg:text-[30px]">
            {datail.reCost}${" "}
            <span className="text-gray-400 fontStyle font-bold line-through text-[16px] lg:text-[20px]">
              {datail.cost}$
            </span>
          </h3>
        </div>
        <div className="w-full flex flex-col justify-between items-start space-y-16 lg:flex-row lg:space-y-0">
          <div className="w-full space-y-5 lg:w-[70%] ">
            <div className="w-full rounded-md shadow-xl overflow-hidden flex items-center justify-center">
              <img src={datail.image} alt={datail.name} className="w-full" />
            </div>
            <div className="space-y-5">
              <h3 className="text-black textStyle text-[20px] lg:text-[25px]">
                {datail.name} xarakteristicasi
              </h3>
              <div className="w-full grid grid-cols-2 gap-10 sm:grid-cols-3">
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">
                    Chiqarilgan yili
                  </p>
                  <p className="fontStyle font-bold text-black">
                    {datail.year}
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">Probegi</p>
                  <p className="fontStyle font-bold text-black">
                    {datail.probeg} Km
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">Yonilg'i</p>
                  <p className="fontStyle font-bold text-black">
                    {datail.yonilgi ? datail.yonilgi : "benzin"}
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">
                    Kuzov Turi
                  </p>
                  <p className="fontStyle font-bold text-black">
                    {datail.kuzov ? datail.kuzov : "Belgilanmagan"}
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">
                    Kuch Olchami
                  </p>
                  <p className="fontStyle font-bold text-black">
                    {datail.krosover} l. c.
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">
                    Automobil rangi
                  </p>
                  <p className="fontStyle font-bold text-black">
                    {datail.color ? datail.color : "belgilanmagan"}
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">Benzin</p>
                  <p className="fontStyle font-bold text-black">
                    {datail.benzin ? datail.benzin : "belgilanmagan"}
                  </p>
                </div>
                <div className="space-y-2 text-[14px] lg:text-[16px]">
                  <p className="fontStyle font-bold text-gray-400">Ishlatga</p>
                  <p className="fontStyle font-bold text-black">
                    {datail.numberOfusers ? `${datail.numberOfusers} foudalanuvchi` : "belgilanmagan"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md shadow-xl p-5 border space-y-3 stick lg:w-[28%] ">
            <h3 className="text-[18px] textStyle">
              Kredit shartlarini kriting
            </h3>
            <form className="space-y-3">
              <div>
                <label className="text-gray-700 font-bold fontStyle">
                  Kredit muddati
                </label>{" "}
                <br />
                <input
                  type="number"
                  min={"3"}
                  max={"90"}
                  placeholder="Karedit Oyga beriladi"
                  className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="text-gray-700 font-bold fontStyle">
                  Kredit tolovi
                </label>{" "}
                <br />
                <input
                  type="number"
                  min={"3"}
                  max={"90"}
                  placeholder="Karedit Oyga beriladi"
                  className="w-full border-2 border-gray-300 outline-none p-3 rounded-lg bg-gray-100"
                />
              </div>
              <p className="text-gray-400 font-bold fontStyle">
                Oylik tolov:{" "}
                <span className="text-black">
                  {datail.kredit ? datail.kredit : "Belgilanmanag"}
                </span>
              </p>
              <p className="text-gray-400 font-bold fontStyle">
                Oylik tolov: <span className="text-black">5.0 %</span>
              </p>
              <hr />
              <div>
                <h3 className="text-[18px] textStyle">
                  Malumotlaringizni kiriting
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
                <p className="fontStyle text-[12px] text-gray-500 text-center">
                  Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta
                  ishlashga rozilik bildirasiz
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buycar;
