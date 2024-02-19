import React from "react";
import { useParams } from "react-router-dom";
import { carsData } from "../autoPosterData";
import Massange from "../components/Massange";
import Aksiyalar from "./Aksiyalar";

const Buycar = () => {
  const { id } = useParams();
  const datail = carsData.find((car) => car.id == id);
  return (
    <>
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
          <div className="w-full flex flex-col lg:flex-row justify-between space-y-16 lg:space-y-0 items-start">
            <div className="w-full lg:w-[68%] flex flex-col justify-between items-start space-y-16 lg:flex-row lg:space-y-0 space-x-5">
              <div className="w-full space-y-5">
                <div className="w-full rounded-md shadow-xl overflow-hidden flex items-center justify-center relative">
                  <a
                    href={datail.image}
                    download
                    className="absolute top-4 left-4 bg-white rounded-full py-1 px-3 fontStyle font-bold hoverd"
                  >
                    <i className="bx bxs-download"></i> rasmini yuklab oilish
                  </a>
                  <img
                    src={datail.image}
                    alt={datail.name}
                    className="w-full"
                  />
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
                      <p className="fontStyle font-bold text-gray-400">
                        Probegi
                      </p>
                      <p className="fontStyle font-bold text-black">
                        {datail.probeg} Km
                      </p>
                    </div>
                    <div className="space-y-2 text-[14px] lg:text-[16px]">
                      <p className="fontStyle font-bold text-gray-400">
                        Yonilg'i
                      </p>
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
                      <p className="fontStyle font-bold text-gray-400">
                        Benzin
                      </p>
                      <p className="fontStyle font-bold text-black">
                        {datail.benzin ? datail.benzin : "belgilanmagan"}
                      </p>
                    </div>
                    <div className="space-y-2 text-[14px] lg:text-[16px]">
                      <p className="fontStyle font-bold text-gray-400">
                        Ishlatga
                      </p>
                      <p className="fontStyle font-bold text-black">
                        {datail.numberOfusers
                          ? `${datail.numberOfusers} foudalanuvchi`
                          : "belgilanmagan"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Massange />
          </div>
        </div>
      </div>
      <Aksiyalar />
    </>
  );
};

export default Buycar;
