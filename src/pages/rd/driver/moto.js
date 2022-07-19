import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvMotoHero from "../../../components/sections/DrvMotoHero";
import DrvColumns from "../../../components/sections/DrvColumns";
import HomeColumns from "../../../components/sections/PaxColumns";
import Requirements from "../../../components/sections/Requirements";
import SafetyCTA from "../../../components/sections/SafetyCTA";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const columnsImages = [];

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "rd.DrvMotoHero.bgImage";
  })[0];

  const safetyCTAImage = images.filter((image) => {
    return image.title === "rd.SafetyCTA.image";
  })[0];

  const drvColumnsImage = images.filter((image) => {
    if(image.title === "rd.DrvColumns.image") {
      columnsImages.push(image);
    }
    return image.title === "rd.DrvColumns.image";
  })[0];
  
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <DrvMotoHero bgImage={drvHeroBgImage}></DrvMotoHero>
      <DrvColumns images={columnsImages.reverse()}></DrvColumns>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Driver;

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
            "rd.DrvMotoHero.bgImage"
            "rd.DrvColumns.image"
            "rd.SafetyCTA.image"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "rd" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
    contentfulCountry(code: { eq: "rd" }) {
      city {
        name
      }
    }
  }
`;