import React from "react";
import { graphql } from "gatsby";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "cl.DrvHero.bgImage";
  })[0];
  const cities = data.contentfulCountry.city;
  return (
    <>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvCityList data={cities}></DrvCityList>
    </>
  );
};

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
    allContentfulAsset(filter: { title: { in: ["cl.DrvHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulCountry(code: { eq: "cl" }) {
      city {
        name
      }
    }
  }
`;

export default Ciudades;
