import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PrivacyCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PrivacyCTA = ({ image }: PrivacyCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("PrivacyCTA.title"),
    textColor: t("PrivacyCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("PrivacyCTA.btnMode"),
    btnText: "Políticas de Privacidad",
    btnLink: "#",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default PrivacyCTA;