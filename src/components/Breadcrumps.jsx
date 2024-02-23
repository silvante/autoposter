import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumps = () => {
  const location = useLocation();
  const pathe = location.pathname.replaceAll("%20", " ");
  location.pathname = pathe;
  const path = location.pathname.split("/");
  const filterArr = path.filter(
    (path) =>
      path !== "" && path !== "sotib-olish" && path !== "sale" && path !== "car"
  );
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="flex space-x-5 vercel my-5 w-[96%] xl:w-[1300px]">
        <li>
          <Link to={"/"} className="text-[#E70A32]">
            Bosh sahifa
          </Link>
        </li>

        {filterArr.map((path, index) => {
          return (
            <li key={index}>
              {index !== filterArr.length - 1 ? (
                <Link className="text-[#E70A32]" to={path}>
                  {`${path}`}
                </Link>
              ) : (
                path
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumps;
