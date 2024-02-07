import React from "react";

const Kontaktlar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[96%] space-y-10 mb-10 xl:w-[1300px]">
        <h1 className="textStyle text-[30px] text-black">Kontaktlar</h1>
        <div className="w-full p-10 border flex justify-between flex-wrap space-y-5 md:space-y-0">
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
        <div className="w-full flex justify-between flex-col space-y-5 md:space-y-0 md:flex-row">
          <div className="w-full space-y-5">
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
          <div className="w-full h-44 md:h-[350px] bg-slate-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9192217.943579994!2d18.06482405000001!3d55.77250529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a25c969ae4b%3A0xf2913b514c469d27!2sAvto-Poster!5e0!3m2!1suz!2s!4v1707325328123!5m2!1suz!2s"
              width="600"
              height="450"
              // style="border:0;"
              className="w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontaktlar;
