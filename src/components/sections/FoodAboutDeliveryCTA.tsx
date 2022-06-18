import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutDeliveryCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodAboutDeliveryCTA = ({ image }: FoodAboutDeliveryCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("FoodAboutDeliveryCTA.title"),
    desc: t("FoodAboutDeliveryCTA.desc"),
    bgColor: t("FoodAboutDeliveryCTA.bgColor"),
    textColor: t("FoodAboutDeliveryCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutDeliveryCTA;
