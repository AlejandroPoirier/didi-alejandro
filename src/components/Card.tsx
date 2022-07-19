import React, { ReactNode } from "react";
import reactMarkdown from "react-markdown";
import Btn, { BtnProps } from "./Btn";

// @desc: card component for making columns or cards
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text

export interface CardProps extends BtnProps {
  title: ReactNode | string;
  desc?: string;
  bgColor: string;
  textColor: string;
  image: React.ReactNode;
  height?: string;
  width?: string;
}

const Card = (props: CardProps) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    height,
    width,
    btnLink,
    btnMode,
    btnText,
    btnType,
  } = props;

  return (
    <div
      className={` max-w-xs ${width}  rounded ${bgColor} text-${textColor} my-3 text-center lg:mx-12`}
    >
      <div className="mb-5 ">{image}</div>

      <div
        className={`flex ${height} flex-col items-center justify-between px-6 py-4 text-center`}
      >
        <div className="mb-4">
          <h4 className={`mb-4 text-xl font-bold `}>{title}</h4>
          <p className={"text-lg"}>{desc}</p>
        </div>
        <div className="flex justify-center">
          <Btn
            btnType={btnType}
            btnLink={btnLink}
            btnMode={btnMode}
            btnText={btnText}
          ></Btn>
        </div>
      </div>
    </div>
  );
};

export default Card;