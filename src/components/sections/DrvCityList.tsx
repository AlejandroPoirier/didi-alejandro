import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

interface ListProps {
  data: {
    name: string;
    slug: string;
    image: any;
  }[];
}

const DrvCityList = ({ data }: ListProps) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("DrvCityList.linkItem", { city: city.slug }),
      image: city.image,
    };
  });

  const props = {
    title: t("DrvCityList.title"),
    desc: t("DrvCityList.desc"),
    bgColor: t("DrvCityList.bgColor"),
    textColor: t("DrvCityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default DrvCityList;
