import React, { useState } from "react";
import HeaderLogo from "../assets/images/header-logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [showAside, setShowAside] = useState(false);
  const showModul = () => {
    setShowAside(!showAside);
  };
  return (
    <>
      <header className="w-full flex justify-center bg-white border-none lg:border-2">
        <nav className="w-[96%] flex items-center justify-between my-2 xl:w-[1300px]">
          <div className="flex space-x-10 items-center">
            <Link to={"/"}>
              <img
                src={HeaderLogo}
                alt="Logo autoPoster"
                className="w-[140px] sm:w-[160px]"
              />
            </Link>
            <div className="space-x-10 hidden lg:flex">
              <NavLink className={"fontStyle font-bold"}>Katalog</NavLink>
              <NavLink to={"/aksiyalar"} className={"fontStyle font-bold"}>
                Aksiyalar
              </NavLink>
              <NavLink to={"/kredit"} className={"fontStyle font-bold"}>
                Kredit
              </NavLink>
              <NavLink to={"/kontactlar"} className={"fontStyle font-bold"}>
                Kantaktlar
              </NavLink>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <div className="text-end hidden lg:block">
              <p className="font-bold text-[20px]">
                <i className="bx bx-phone"></i> 8 33 303 82 82
              </p>
              <p className="text-[14px]">eleckton gmail PF tekin</p>
            </div>
            <button onClick={showModul} className="text-[26px] lg:hidden">
              {showAside ? (
                <i className="bx bx-x"></i>
              ) : (
                <i className="bx bx-menu"></i>
              )}
            </button>
          </div>
        </nav>
      </header>
      <div className={`w-full absolute top-[60px] z-50 bg-white flex justify-center lg:hidden shadow-lg py-5  transition-all ${showAside ? `translate-x-0` : `translate-x-[-100%]` }`}>
        <div className="flex-col w-[96%] space-y-5">
          <div>
            <NavLink
              onClick={() => setShowAside(false)}
              className={
                "fontStyle font-bold inline-block w-full rounded-md transition-all hover:bg-gray-300 p-3"
              }
            >
              Katalog
            </NavLink>
            <NavLink
              onClick={() => setShowAside(false)}
              to={"/aksiyalar"}
              className={
                "fontStyle font-bold inline-block w-full rounded-md transition-all hover:bg-gray-300 p-3"
              }
            >
              Aksiyalar
            </NavLink>
            <NavLink
              onClick={() => setShowAside(false)}
              to={"/kredit"}
              className={
                "fontStyle font-bold inline-block w-full rounded-md transition-all hover:bg-gray-300 p-3"
              }
            >
              Kredit
            </NavLink>
            <NavLink
              onClick={() => setShowAside(false)}
              to={"/kontactlar"}
              className={
                "fontStyle font-bold inline-block w-full rounded-md transition-all hover:bg-gray-300 p-3"
              }
            >
              Kantaktlar
            </NavLink>
          </div>
          <div className="text-start">
            <p className="font-bold text-[20px]">
              <i className="bx bx-phone"></i> 8 33 303 82 82
            </p>
            <p className="text-[14px]">eleckton gmail PF tekin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
