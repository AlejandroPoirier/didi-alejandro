import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LegalHero from "../../../components/sections/LegalHero";
import LegalCTA from "../../../components/sections/LegalCTA";

const Legal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ar.HomeHero.bgImage";
  })[0];
  const legalCTAImage = images.filter((image) => {
    return image.title === "ar.PaxCTA.image";
  })[0];

  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      <LegalCTA image={legalCTAImage}></LegalCTA>
    </Layout>
  );
};

export default Legal;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["ar.HomeHero.bgImage", "ar.PaxCTA.image"] } }
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
