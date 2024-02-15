import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { aksiyalar } from "../autoPosterData";
import ADimg from "../assets/images/ad.png";

const AksiyaDatails = () => {
  const { id } = useParams();

  const [shows, setShows] = useState(false);

  const aksiya = aksiyalar.find((aksiya) => aksiya.id === id);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[96%] xl:w-[1300px]">
          <h3 className="text-black fontStyle text-[20px] font-bold mb-5 md:text-[30px]">
            {aksiya.title}
          </h3>
          <div className="rounded-lg shadow-md  p-2 w-full space-y-5">
            <img
              src={aksiya.image}
              alt={aksiya.title}
              className="rounded-lg transition-all hover:shadow-xl"
            />
            <div className="p-5 space-y-5">
              <p className="fontStyle">{aksiya.info}</p>
              <button
                className="bg-[#E70A32] py-3 px-5 rounded-md text-white"
                onClick={() => setShows(true)}
              >
                Aksiyada Ishtrok etish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10">
        <div className="w-[96%] xl:w-[1300px]">
          <h3 className="text-black fontStyle text-[20px] font-bold md:text-[30px]">
            Boshqa aksiyalar
          </h3>
          <div className="w-full grid grid-cols-1 gap-5 my-5 md:grid-cols-2 xl:grid-cols-3">
            {aksiyalar.map((aksiya) => {
              return (
                <div key={aksiya.id} className="space-y-5">
                  <div className="w-full h-[230px] flex justify-center items-center overflow-hidden rounded-lg">
                    <img
                      src={aksiya.image}
                      alt={aksiya.title}
                      className="flex transition-all hover:scale-110"
                    />
                  </div>
                  <div className="">
                    <p className="text-[20px] font-bold">{aksiya.title}</p>
                    <p className="text-[20px] font-bold">{aksiya.date} gacha</p>
                  </div>
                  <div>
                    <Link
                      className="text-[20px] text-[#E70A32] transition-all fontStyle hover:text-[blue]"
                      to={`/aksiyalar/${aksiya.id}`}
                    >
                      ishtrok etish →
                    </Link>
                  </div>
                </div>
              );
            })}
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

export default AksiyaDatails;
