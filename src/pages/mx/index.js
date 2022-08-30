import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import FoodCTA from "../../components/sections/FoodCTA";
import FleetAboutCTA from "../../components/sections/FleetAboutCTA";
import PaxCTA from "../../components/sections/PaxCTA";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.HomeHero.bgImage";
  })[0];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.image";
  })[0];
  const safetyCTABGImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.bgImage";
  })[0];
  const FoodAboutCTAImage = images.filter((image) => {
    return image.title === "mx.FoodAboutCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "mx.PaxCTA.image";
  })[0];
  const FleetAboutCTAImage = images.filter((image) => {
    return image.title === "mx.FleetAboutCTA.image";
  })[0];

  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <FoodCTA image={FoodAboutCTAImage}></FoodCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <SafetyCTA image={safetyCTAImage} bgImage={safetyCTABGImage}></SafetyCTA>
      <FleetAboutCTA image={FleetAboutCTAImage}></FleetAboutCTA>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.HomeHero.bgImage"
            "mx.SafetyCTA.image"
            "mx.SafetyCTA.bgImage"
            "mx.FoodAboutCTA.image"
            "mx.PaxCTA.image"
            "mx.FleetAboutCTA.image"
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
