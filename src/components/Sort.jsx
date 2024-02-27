import React from "react";
import { marksIcon, marks } from "../autoPosterData";
import "../components/components.css";
import { Link } from "react-router-dom";

const Sort = () => {
  const STT = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center py-10">
      <div className="wrab w-[96%] xl:w-[1300px] space-y-8">
        <h2 className="w-full text-center textStyle font-bold text-[30px]">
          Mashxur automabillar markalari
        </h2>
        <div className="wrab w-full xl:w-[1300px] grid grid-cols-4 gap-5 flex-wrap">
          {marksIcon.map((mark) => {
            return (
              <Link
                key={mark.mark}
                className="grey-border flex items-center justify-between p-3 rounded cursor-pointer shrink-0 hoverd"
                to={`/${mark.mark}`}
                onClick={STT}
              >
                <div className="flex items-center space-x-3">
                  <img src={mark.icon} alt={mark.mark} className="w-[30px]" />
                  <p className="text-[18px]">{mark.mark}</p>
                </div>
                <p>{mark.elems.length}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sort;
