import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import TermsAndConditionsContent from "../../../../components/sections/TermsAndConditionsContent";

const Privacy = ({ data }) => {
  return (
    <Layout>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulLegal(name: { eq: "Renta de equipo DiDi Costa Rica" }) {
      content {
        raw
      }
    }
  }
`;

export default Privacy;
