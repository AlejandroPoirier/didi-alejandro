import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDelivery from "../../components/sections/HelpCenterFAQDelivery";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HelpCenterFAQTaxi from "../../components/sections/HelpCenterFAQTaxi";
import HomeColumns from "../../components/sections/HomeColumns";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "rd.HelpCenterHero.bgImage";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express R. Dominicana"
  );
  const faqTaxi = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Econo R. Dominicana"
  );
  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>

      <HomeColumns></HomeColumns>
    </Layout>
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
    allContentfulAsset(
      filter: { title: { in: ["rd.HelpCenterHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "rd" } } } }
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

export default CentroDeAyuda;