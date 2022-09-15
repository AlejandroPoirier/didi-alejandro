import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DirectionHero from "../../components/sections/DirectionHero";
import DirectionBanner from "../../components/sections/DirectionBanner";
import DirectionStepGrid from "../../components/sections/DirectionStepsGrid";

const DestinationTemplate = ({ data }) => {
  return (
    <Layout>
      <DirectionHero data={data.contentfulDirection}></DirectionHero>
      <DirectionBanner data={data.contentfulDirection}></DirectionBanner>
      <DirectionStepGrid data={data.contentfulDirection}></DirectionStepGrid>
    </Layout>
  );
};

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
    contentfulDirection(id: { eq: $id }) {
      destinationId
      destination
      destinationAddress
      originId
      origin
      originAddress
      distance
      duration
      carDuration
      mode
      lastLine
      steps {
        distance
        duration
        instruction
        mode
        name
        transit {
          arrival
          departure
          line_color
          line_name
          line_short_name
          vehicle_type
        }
      }
    }
  }
`;

export default DestinationTemplate;