import React from "react";
import Btn from "./Btn";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Card = (props) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    btnText,
    btnLink,
    btnMode,
    btnType,
  } = props;

  return (
    <div
      className={`max-w-sm rounded bg-${bgColor} text-${textColor} text-center`}
    >
      <div className="mb-5">{image}</div>

      <div className="px-6 py-4 h-80 flex flex-col text-center items-center justify-between">
        <h4 className={`font-bold text-xl mb-2 `}>{title}</h4>
        <p className="h-16 text-base">{desc}</p>
        <span className="flex justify-center">
          <Btn type={btnType} link={btnLink} mode={btnMode}>
            {btnText}
          </Btn>
        </span>
      </div>
    </div>
  );
};

export default Card;
