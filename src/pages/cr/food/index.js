import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodHeroDualLink from "../../../components/sections/FoodHeroDualLink";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";

const Food = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodHero.bgImage";
  })[0];
  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "cr.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "cr.FoodDeliveryCTA.image";
  })[0];
  return (
    <Layout>
      <FoodHeroDualLink bgImage={foodHeroBgImage}></FoodHeroDualLink>
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(cr.FoodHero.bgImage)|(cr.FoodColumns.image)|(cr.FoodBusinessCTA.image)|(cr.FoodDeliveryCTA.image)/"
        }
      }
      sort: { title: ASC }
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
