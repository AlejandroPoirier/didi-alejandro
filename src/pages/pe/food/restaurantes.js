import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodBusinessColumns from "../../../components/sections/FoodBusinessColumns";
import FoodBusinessDownloads from "../../../components/sections/FoodBusinessDownloads";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "pe.FoodBusinessHero.bgImage";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "pe.FoodBusinessHeroMobile.bgImage";
  })[0];
  const foodBusinessColumnsImages = images.filter((image) => {
    return image.title.indexOf("pe.FoodBusinessColumns.image") !== -1;
  });
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("pe.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
      <FoodBusinessHero
        bgImage={foodHeroBgImage}
        mobileBgImage={foodHeroMobileBgImage}
      ></FoodBusinessHero>
      <FoodBusinessColumns
        images={foodBusinessColumnsImages}
      ></FoodBusinessColumns>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
    </Layout>
  );
};

export default FoodBusiness;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(pe.FoodBusinessHero.bgImage)|(pe.FoodBusinessHeroMobile.bgImage)|(pe.FoodBusinessColumns.image)|(pe.FoodBusinessDownloads.image)/"
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
