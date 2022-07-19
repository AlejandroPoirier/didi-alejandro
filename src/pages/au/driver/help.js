import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import HelpCenterHero from "../../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../../components/sections/HelpCenterFAQDrv";
import HomeColumns from "../../../components/sections/HomeColumns";

const HelpCenter = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "au.HelpCenterHero.bgImage";
  })[0];

  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Australia"
  );
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default HelpCenter;

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
        title: { regex: "/(au.HelpCenterHero.bgImage)|(au.HomeColumns.image)/" }
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
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "au" } } } }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
          }
        }
      }
    }
  }
`;