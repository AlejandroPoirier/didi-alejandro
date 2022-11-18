import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AlianzaMujeresCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AlianzaMujeresCTA = ({ image }: AlianzaMujeresCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("AlianzaMujeresCTA.title"),
    desc: t("AlianzaMujeresCTA.desc"),
    textColor: t("AlianzaMujeresCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default AlianzaMujeresCTA;
