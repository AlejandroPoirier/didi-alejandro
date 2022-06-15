import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyGridDuringTrip from "../../components/sections/SafetyGridDuringTrip";
import SafetyGridDrv from "../../components/sections/SafetyGridDrv";

const Safety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "au.SafetyHero.bgImage";
  })[0];
  const safetyGridPaxImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridPax.image") !== -1;
  });
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridDrv.image") !== -1;
  });

  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyGridDuringTrip images={safetyGridPaxImages}></SafetyGridDuringTrip>
      <SafetyGridDrv images={safetyGridDrvImages}></SafetyGridDrv>
    </Layout>
  );
};

export default Safety;

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
          regex: "/(au.SafetyGridPax)|(au.SafetyHero)|(au.SafetyGridDrv)/"
        }
      }
      sort: { fields: title }
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