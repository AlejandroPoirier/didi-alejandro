import React, { useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import DriverCTA from "../../components/sections/Drv/DrvCTA";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";
import { ab } from "../../config/ab";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const version = ab(
    "2023-10-DrvHomeWheels-t5",
    "2023-10-DrvHomeOriginal-t5",
    "t5"
  );
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "pa.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "pa.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.PaxHeroMobile.bgImage";
  })[0];
  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carrousel-icon-drv";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carrousel-icon-pax";
  })[0];
  const carrouselIcons = [carrouselIcons0, carrouselIcons1];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "pa.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "pa.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "pa.PaxCTA.image";
  })[0];

  return (
    <Layout sb={false}>
      <>
        <div className={`${activeHero !== 0 && "hidden"} `}>
          <DrvHero
            bgImage={drvHeroBgImage}
            mobileBgImage={drvHeroMobileBgImage}
          ></DrvHero>
        </div>
        <div className={`${activeHero !== 1 && "hidden"} `}>
          <PaxHero
            bgImage={paxHeroBgImage}
            mobileBgImage={paxHeroMobileBgImage}
          ></PaxHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
        ></HeroCarrousel>
      </>
      {version === "a" && <DriverCTA></DriverCTA>}
      {version === "b" && <DrvCTA image={drvCTAImage}></DrvCTA>}
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "pa.HomeHero.bgImage"
            "pa.DrvHero.bgImage"
            "pa.DrvHeroMobile.bgImage"
            "pa.PaxHero.bgImage"
            "pa.PaxHeroMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "pa.SafetyCTA.image"
            "pa.DrvCTA.image"
            "pa.PaxCTA.image"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
