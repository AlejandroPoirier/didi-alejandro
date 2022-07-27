import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBlogHero from "../../../../components/sections/FoodBlogHero";
import FoodBlogColumns from "../../../../components/sections/FoodBlogColumns";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "do.FoodHero.bgImage";
  })[0];
  return (
    <Layout>
      <FoodBlogHero bgImage={articlesHeroBgImage}></FoodBlogHero>
      <FoodBlogColumns data={data}></FoodBlogColumns>
    </Layout>
  );
};

export default FoodBlog;

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
    allContentfulAsset(filter: { title: { in: ["do.FoodHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "food" }, country: { code: { eq: "do" } } }
      sort: { fields: content___references___createdAt, order: DESC }
      limit: 10
    ) {
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