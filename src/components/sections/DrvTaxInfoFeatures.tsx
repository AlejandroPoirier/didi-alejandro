import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvTaxInfoFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvTaxInfoFeatures = ({ image }: DrvTaxInfoFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DrvTaxInfoFeatures.title"),
    bullets: t("DrvTaxInfoFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvTaxInfoFeatures.textColor"),
    bgColor: t("DrvTaxInfoFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),
    btnMode: t("DrvTaxInfoFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvTaxInfoFeatures;