import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import StoreHero from "../../components/sections/StoreHero";
import { QRCodeSVG } from "qrcode.react";

const Store = ({ data }) => {
  const [QRUrl, setQRUrl] = useState(
    "https://global-rides-passenger.onelink.me/xNlo"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
      size={300}
      height={300}
      width={300}
      bgColor="#ffffff"
      className="z-10 m-4 w-100"
    ></QRCodeSVG>
  );

  useEffect(() => {
    setQRUrl(
      document
        .getElementsByClassName("btn-light")[0]
        .getElementsByTagName("a")[0].href
    );
  }, []);

  return (
    <Layout>
      <StoreHero image={qr}></StoreHero>
    </Layout>
  );
};

export default Store;

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
  }
`;