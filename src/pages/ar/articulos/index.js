import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesHero from "../../../components/sections/ArticlesHero";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "ar.ArticlesHero.bgImage";
  })[0];
  return (
    <Layout>
      <ArticlesHero bgImage={articlesHeroBgImage}></ArticlesHero>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default Article;

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
    allContentfulAsset(filter: { title: { in: ["ar.ArticlesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(filter: { country: { code: { eq: "ar" } } }) {
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