import React from "react";
import { Link } from "gatsby";
import Image from "../Image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyFeaturesGrid {
  features: {
    name: string;
    slug: string;
  }[];
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const SafetyGridDuringTrip = ({ images, features }: SafetyFeaturesGrid) => {
  const urlBase = t("SafetyGridDuringTrip.urlBase");
  const props: ColumnsSectionProps = {
    title: t("SafetyGridDuringTrip.title"),
    bgColor: t("SafetyGridDuringTrip.bgColor"),
    textColor: t("SafetyGridDuringTrip.textColor"),
    columns: t("SafetyGridDuringTrip.columns", { returnObjects: true }),
  };

  props.columns = props.columns.map((c, index) => {
    const image = images[index];
    let link = c.title;
    let colImage = <Image imageData={image} imageStyle="z-10 m-4"></Image>;
    if (features) {
      let feature = features.filter((f) => {
        const minTitle = String(c.title).toLowerCase();
        const minFTitle = String(f.name).toLowerCase();
        return minTitle.indexOf(minFTitle) !== -1;
      });
      if (feature[0]) {
        link = <Link to={urlBase + "" + feature[0].slug}>{c.title}</Link>;
        colImage = (
          <Link to={urlBase + "" + feature[0].slug}>
            <Image imageData={image} imageStyle="z-10 m-4"></Image>
          </Link>
        );
      }
    }
    return {
      title: link,
      desc: c.desc,
      textColor: "white",
      bgColor: "transparent",
      image: colImage,
    };
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridDuringTrip;