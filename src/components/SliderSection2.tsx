import React from "react";
import SliderItem from "./SliderItem";

interface SliderProps {
    items: {
      title: string;
      desc: string;
      bgColor: string;
      textColor: string;
      image: React.ReactNode;
    }[];
    bgColor: string;
    title: string;
    textColor: string;
}

const SliderSection2 = ({ items, bgColor, title, textColor }: SliderProps) => {

  return (
    <section className={`${bgColor} text-${textColor} py-12`}>
      <div className="container mx-auto flex flex-col flex-wrap justify-center">
        {title && <h2 className="text-center text-3xl">{title}</h2>}
        <ul
          className={`mt-10 flex w-full snap-x list-none gap-8 overflow-x-auto`}
        >
          {items.map((item) => {
            return <SliderItem {...item}></SliderItem>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default SliderSection2;
