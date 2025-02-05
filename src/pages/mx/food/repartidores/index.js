import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryHero from "../../../../components/sections/FoodDeliveryHero";
import FoodDeliveryColumns from "../../../../components/sections/FoodDeliveryColumns";
import FoodDeliveryDownloads from "../../../../components/sections/FoodDeliveryDownloads";
import FoodDeliveryStepsColumns from "../../../../components/sections/FoodDeliveryStepsColumns";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodDeliveryHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  const foodDeliveryHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHeroMobile.bgImage";
  })[0];
  const foodDeliveryColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryColumns.image") !== -1;
  });
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  return (
    <Layout>
      <FoodDeliveryHero
        bgImage={foodDeliveryHeroBgImage}
        mobileBgImage={foodDeliveryHeroMobileBgImage}
      ></FoodDeliveryHero>
      <FoodDeliveryColumns
        images={foodDeliveryColumnsImages}
      ></FoodDeliveryColumns>
      <FoodDeliveryStepsColumns></FoodDeliveryStepsColumns>
      <FoodDeliveryDownloads
        images={foodDeliveryDownloadsImages}
      ></FoodDeliveryDownloads>
    </Layout>
  );
};

export default FoodDelivery;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodDeliveryHero.bgImage)|(mx.FoodDeliveryHeroMobile.bgImage)|(mx.FoodDeliveryColumns.image)|(mx.FoodDeliveryDownloads.image)/"
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
