import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiMujerProgramaCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiMujerProgramaCTA = ({ image }: DiDiMujerProgramaCTA) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DiDiMujerProgramaCTA.title"),
    desc: t("DiDiMujerProgramaCTA.desc"),
    textColor: t("DiDiMujerProgramaCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiMujerProgramaCTA;