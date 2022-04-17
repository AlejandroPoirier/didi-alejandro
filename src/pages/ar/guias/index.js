import React from "react";
import { graphql } from "gatsby";
import GuidesHero from "../../../components/sections/GuidesHero";
import GuidesColumns from "../../../components/sections/GuidesColumns";

const Guias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const guidesHeroBgImage = images.filter((image) => {
    return image.title === "ar.GuidesHero.bgImage";
  })[0];
  return (
    <>
      <GuidesHero bgImage={guidesHeroBgImage}></GuidesHero>
      <GuidesColumns data={data}></GuidesColumns>
    </>
  );
};

export default Guias;

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
    allContentfulAsset(filter: { title: { in: ["ar.GuidesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulGuide(filter: { country: { code: { eq: "ar" } } }) {
      nodes {
        title
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
