import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticleHero from "../../../components/ar/ArticleHero";
import ArticleContent from "../../../components/ar/ArticleContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import ArticlesColumns from "../../../components/ar/ArticlesColumns";

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <ArticleHero data={data}></ArticleHero>
      <ArticleContent data={data}></ArticleContent>
      <PaxBanner></PaxBanner>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query ($id: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulArticle(id: { eq: $id }) {
      title
      excerpt
      updatedAt
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
      featuredImage {
        gatsbyImageData
      }
    }
    allContentfulArticle {
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