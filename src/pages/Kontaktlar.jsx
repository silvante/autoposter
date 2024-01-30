import React from "react";

const Kontaktlar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1300px] space-y-10 mb-10">
        <h1 className="textStyle text-[30px] text-black">Kontaktlar</h1>
        <div className="w-full p-10 border flex justify-between">
          <div className="flex items-center">
            <div>
              <i></i>
            </div>
            <div>
              <p className="text-gray-500 fontStyle font-bold">Adress:</p>
              <p className="text-black fontStyle font-bold">
                Baliqchi tumani, Chinobod shashri
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <i></i>
            </div>
            <div>
              <p className="text-gray-500 fontStyle font-bold">Telefon:</p>
              <p className="text-black fontStyle font-bold">
                +998 (33) 303-82-82
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <i></i>
            </div>
            <div>
              <p className="text-gray-500 fontStyle font-bold">Ish vahti:</p>
              <p className="text-black fontStyle font-bold">
                Har kuni soat 8:00 dan 18:00 gacha
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[50%] space-y-5">
            <p className="font-bold text-[20px]">Yuridik malumotlar:</p>
            <div className=" space-y-3">
              <div>
                <p className="font-bold fontStyle text-gray-500">
                  Toliq kampaniya nomi:
                </p>
                <p className="font-bold fontStyle">
                  Toliq majburiyatlarga ega bolmagan Jamiyat "autoposter"
                </p>
              </div>
              <div>
                <p className="font-bold fontStyle text-gray-500">
                  Yuridik Adress:
                </p>
                <p className="font-bold fontStyle">Belgilanmagan</p>
              </div>
              <div>
                <p className="font-bold fontStyle text-gray-500">Organ:</p>
                <p className="font-bold fontStyle">Belgilanmagan</p>
              </div>
              <div>
                <p className="font-bold fontStyle text-gray-500">INN:</p>
                <p className="font-bold fontStyle">Belgilanmagan</p>
              </div>
              <div>
                <p className="font-bold fontStyle text-gray-500">
                  General direktor:
                </p>
                <p className="font-bold fontStyle">
                  Mardonbek Xamidov Farhadovich
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-slate-300 rounded-lg">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontaktlar;
