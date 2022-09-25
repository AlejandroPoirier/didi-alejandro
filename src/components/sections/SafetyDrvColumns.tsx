
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyDrvColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
  icons: any[];
  title?: string;
  desc?: string;
  columns?: any[];
}

const SafetyDrvColumns = ({ images, icons, title, desc, columns }: SafetyDrvColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("SafetyDrvColumns.bgColor"),
    textColor: t("SafetyDrvColumns.textColor"),
    columns: columns || t("SafetyDrvColumns.columns", { returnObjects: true }),
    title: title || t("SafetyDrvColumns.title"),
    desc: desc,
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
      col.image = <FontAwesomeIcon icon={icons[index]} size="3x" />;
    });
  } else {
    props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};


export default SafetyDrvColumns;
