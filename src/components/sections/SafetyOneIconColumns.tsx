import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnNoLimitSection, { ColumnsSectionProps } from "../ColumnNoLimitSection";

interface SafetyOneIconColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any;
}

const SafetyOneIconColumns = ({ images, icons }: SafetyOneIconColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("SafetyOneIconColumns.bgColor"),
    textColor: t("SafetyOneIconColumns.textColor"),
    columns: t("SafetyOneIconColumns.columns", { returnObjects: true }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-48"
        ></GatsbyImage>
      );
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = (
        <FontAwesomeIcon icon={icons} size="3x" className="w-12" />
      );
    });
  } else {
    props.columns[0].image = (
      <FontAwesomeIcon icon={faUserShield} size="3x" className="w-12" />
    );

    props.columns[1].image = (
      <FontAwesomeIcon icon={faDollarSign} size="3x" className="w-12" />
    );

    props.columns[2].image = (
      <FontAwesomeIcon icon={faClock} size="3x" className="w-12" />
    );
  }
  return <ColumnNoLimitSection {...props}></ColumnNoLimitSection>;
};

export default SafetyOneIconColumns;