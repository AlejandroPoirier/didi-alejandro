import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const SafetyCTA = () => {
  const props = {
    title: "En DiDi, tu seguridad es nuestra prioridad",
    desc: "Revisá todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje",
    textColor: "white",
    bgColor: "bg-blue-primary",
    image: (
      <StaticImage
        src="../../images/cl/logo-funciones-seguridad.png"
        alt="seguridad logo"
        className="w-100 z-10 m-4"
      ></StaticImage>
    ),

    btnText: "Saber Más",
    btnLink: "/seguridad/",
    btnMode: "light",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTA;