import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface MujeresDiDiHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const MujeresDiDiHero = ({ bgImage }: MujeresDiDiHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("MujeresDiDiHero.title"),
    desc: t("MujeresDiDiHero.desc"),
    textColor: t("MujeresDiDiHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default MujeresDiDiHero;
