import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HomeColumns from "../../components/sections/HomeColumns";

const CentroDeAyuda = ({ data }) => {
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Argentina"
  );
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Pasajero Argentina"
  );

  return (
    <Layout>
      <HelpCenterHero></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>

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
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "ar" } } } }
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
