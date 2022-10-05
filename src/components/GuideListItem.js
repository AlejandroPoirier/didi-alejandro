import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import Btn, { BtnProps } from "./Btn";

const GuideListItem = ({ text, secondText, link, image }) => {
  const subText = secondText && secondText.slice(0, 40).concat("...");

  const item = link ? (
    <div className="items-center justify-between px-4">
        {image}
        <p className="mb-4 text-xl font-bold text-orange-primary">
            {text}
        </p>
        <Btn
        btnType={"none"}
        btnLink={link}
        btnMode={"primary"}
        btnText={"Conoce más"}
        ></Btn>
    </div>
  ) : (
    <p>{text}</p>
  );
  return (
    <li className={`relative w-80`}>
      {item}
    </li>
  );
};

export default GuideListItem;
