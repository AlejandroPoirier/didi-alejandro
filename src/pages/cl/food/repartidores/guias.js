import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryHero from "../../../../components/sections/FoodDeliveryHero";
import GuidesDeliveryColumns from "../../../../components/sections/GuidesDeliveryColumns";
import Pagination from "../../../../components/Pagination";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  return (
    <Layout index={false}>
      <FoodDeliveryHero bgImage={repartidoresHeroBgImage}></FoodDeliveryHero>
      <GuidesDeliveryColumns data={data}></GuidesDeliveryColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["mx.FoodDeliveryHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulGuide(filter: { category: { eq: "delivery" },  country: { code: { eq: "cl" } } }) {
      nodes {
        title
        slug
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;