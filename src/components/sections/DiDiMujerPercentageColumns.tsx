import React from "react";
import { t } from "../../context/countryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiMujerPercentageColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiMujerPercentageColumns = ({
  images,
}: DiDiMujerPercentageColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiMujerPercentageColumns.bgColor"),
    textColor: t("DiDiMujerPercentageColumns.textColor"),
    columns: t("DiDiMujerPercentageColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  } else {
    props.columns[0].image = <FontAwesomeIcon icon={faUserShield} size="3x" />;

    props.columns[1].image = <FontAwesomeIcon icon={faDollarSign} size="3x" />;

    props.columns[2].image = <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiMujerPercentageColumns;
