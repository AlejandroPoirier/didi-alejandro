import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodCityHero from "../../../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../../../components/sections/FoodCityRestaurantCTA";
import FoodNeighborhoodList from "../../../../components/sections/FoodNeighborhoodList";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cities = data.allContentfulNeighbourhood.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  const foodCTA3Image = images.filter((image) => {
    return image.title === "mx.FoodCTA.image";
  })[0];

  return (
    <Layout>
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulNeighbourhood}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulNeighbourhood}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulNeighbourhood}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulNeighbourhood}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodNeighborhoodList data={cities}></FoodNeighborhoodList>
      <FoodCityBannerCTA3
        data={data.contentfulNeighbourhood}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String, $language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["food"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulNeighbourhood(id: { eq: $id }){
      name
      slug
    }
    allContentfulNeighbourhood{
      nodes {
        name
        slug
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)/"
        }
      }
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