import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DrvColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  icons: any[];
}

const DrvColumns = ({ images, icons }: DrvColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DrvColumns.bgColor"),
    textColor: t("DrvColumns.textColor"),
    columns: t("DrvColumns.columns", { returnObjects: true }),
  };
  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else if (icons) {
    props.columns.forEach((col, index) => {
      col.image = (
        <FontAwesomeIcon icon={icons[index]} size="3x" className="w-12" />
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
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DrvColumns;
