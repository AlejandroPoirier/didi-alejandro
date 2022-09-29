import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const DiDiPayGrid = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DiDiPayGrid.title"),
    desc: t("DiDiPayGrid.desc"),
    bgColor: t("DiDiPayGrid.bgColor"),
    textColor: t("DiDiPayGrid.textColor"),
    columns: t("DiDiPayGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        width={700}
        height={700}
        className="z-10 m-4"
      ></GatsbyImage>
    );
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayGrid;
