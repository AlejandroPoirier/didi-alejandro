import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "co.HelpCenterHero.bgImage";
  })[0];

  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Colombia"
  );
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Pasajero Colombia"
  );

  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["co.HelpCenterHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "co" } } } }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;

export default CentroDeAyuda;
