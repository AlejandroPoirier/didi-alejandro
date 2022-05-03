import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiMasHero from "../../../components/sections/DiDiMasHero";
import DiDiMasGrid from "../../../components/sections/DiDiMasGrid";
import DiDiMasCTA from "../../../components/sections/DiDiMasCTA";
import HomeColumns from "../../../components/sections/HomeColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "cl.DiDiMasHero.bgImage";
  })[0];
  const didiMasHeroImage = images.filter((image) => {
    return image.title === "cl.DiDiMasHero.image";
  })[0];
  const didiMasCTAImage = images.filter((image) => {
    return image.title === "cl.DiDiMasCTA.image";
  })[0];
  return (
    <Layout>
      <DiDiMasHero
        bgImage={didiMasHeroBgImage}
        image={didiMasHeroImage}
      ></DiDiMasHero>
      <DiDiMasGrid data={partners}></DiDiMasGrid>
      <DiDiMasCTA image={didiMasCTAImage}></DiDiMasCTA>
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
      filter: { title: { regex: "/(cl.DiDiMasHero)|(cl.DiDiMasCTA)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulPartner(filter: { country: { code: { eq: "cl" } } }) {
      nodes {
        name
        desc
        logo {
          gatsbyImageData
          description
        }
      }
    }
  }
`;

export default DiDiMas;