import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnImage from "../ColumnImage";

const DrvBenefits = ({ image, icons }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DrvBenefits.title"),
    bgColor: t("DrvBenefits.bgColor"),
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 mt-8 w-80"
      ></GatsbyImage>
    ),
    columns: t("DrvBenefits.columns", { returnObjects: true }),
    reverse: false,
  };

  icons.forEach((icon, index) => {
    props.columns[index].image = (
      <FontAwesomeIcon icon={icon} size="4x" className="text-orange-primary" />
    );
  });

  return <ColumnImage {...props}></ColumnImage>;
};

export default DrvBenefits;