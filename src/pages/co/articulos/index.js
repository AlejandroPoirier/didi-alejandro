import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";
import ArticlesHero from "../../../components/sections/ArticlesHero";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.ArticlesHero.bgImage";
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
  query {
    allContentfulAsset(filter: { title: { in: ["cl.ArticlesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "rides" }, country: { code: { eq: "co" } } }
      sort: { updatedAt: DESC }
      limit: 10
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
