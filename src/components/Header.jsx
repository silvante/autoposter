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
              <NavLink to={"/katalog"} className={"fontStyle font-bold"}>
                Katalog
              </NavLink>
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
              <Link
                to={"/kontactlar"}
                className="fontStyle text-md cursor-pointer px-4 py-3 bg-black rounded-md text-white"
              >
                <i className="bx bx-phone"></i> boglanish
              </Link>
            </div>
            <button
              aria-label="menu"
              onClick={showModul}
              className="text-[26px] lg:hidden"
            >
              {showAside ? (
                <i className="bx bx-x"></i>
              ) : (
                <i className="bx bx-menu"></i>
              )}
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`w-full absolute top-[60px] z-50 bg-white flex justify-center lg:hidden shadow-lg py-5  transition-all ${
          showAside ? `translate-x-0` : `translate-x-[-100%]`
        }`}
      >
        <div className="flex-col w-[96%] space-y-5">
          <div className="responsiver_nav">
            <NavLink
              to={"/katalog"}
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
          <Link
            to={"/kontactlar"}
            onClick={() => setShowAside(false)}
            className="fontStyle text-md cursor-pointer px-4 py-3 bg-black rounded-md text-white inline-block w-full text-center"
          >
            <i className="bx bx-phone"></i> boglanish
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
