import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HomeColumns from "../../components/sections/HomeColumns";
import FaqList from "../../components/sections/FaqList";

const HelpCenter = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "au.HelpCenterHero.bgImage";
  })[0];
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Riders Australia"
  );
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Australia"
  );
  const faqDeliveryRider = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Australia Rider"
  );
  const faqDeliveryDrv = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Australia"
  );
  const faqShare = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Share Australia"
  );
  const faqShareRider = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Share Australia Rider"
  );
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
      <FaqList
        title={"More FAQ for Drivers"}
        faqs={faqExpress[0].faq}
      ></FaqList>
      <FaqList title={"More FAQ for Riders"} faqs={faqPax[0].faq}></FaqList>
      <FaqList
        title={"More FAQ DiDi Delivery Rider"}
        faqs={faqDeliveryRider[0].faq}
      ></FaqList>
      <FaqList
        title={"More FAQ DiDi Delivery"}
        faqs={faqDeliveryDrv[0].faq}
      ></FaqList>
      <FaqList
        title={"More FAQ DiDi Share Australia"}
        faqs={faqShare[0].faq}
      ></FaqList>
      <FaqList
        title={"More FAQ DiDi Share Australia for Riders"}
        faqs={faqShareRider[0].faq}
      ></FaqList>
    </Layout>
  );
};

export default HelpCenter;

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
    allContentfulAsset(
      filter: {
        title: { regex: "/(au.HelpCenterHero.bgImage)|(au.HomeColumns.image)/" }
      }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "au" } } } }
    ) {
      nodes {
        name
        faq {
          title
          slug
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
