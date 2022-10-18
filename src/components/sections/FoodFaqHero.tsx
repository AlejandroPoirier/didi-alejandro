import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodFaqHeroProps {
  title: string;
  desc: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodFaqHero = ({ title, desc, bgImage }: FoodFaqHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("FoodFaqHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodFaqHero;