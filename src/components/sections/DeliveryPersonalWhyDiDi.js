import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DeliveryPersonalWhyDiDi = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DeliveryPersonalWhyDiDi.title"),
    desc: t("DeliveryPersonalWhyDiDi.desc"),
    textColor: t("DeliveryPersonalWhyDiDi.textColor"),
    bgColor: t("DeliveryPersonalWhyDiDi.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryPersonalWhyDiDi.btnMode"),
    btnType: "pax",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalWhyDiDi;