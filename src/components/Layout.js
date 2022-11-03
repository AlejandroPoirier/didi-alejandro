import React from "react";
import { useLocation } from "@reach/router";
import Seo from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import FooterFood from "./FooterFood";
import SmartBanner from "./SmartBanner";
import "../styles/global.css";

// @desc: layout with global header, menu, smartbanner and footer
const Layout = ({ sb = true, title, desc, children }) => {
  const { pathname } = useLocation();
  let smartBannerType = "drv";
  if (pathname.includes("didi-fleet")) smartBannerType = "fleet";
  if (pathname.includes("didipay")) smartBannerType = "payment";
  if (pathname.includes("food")) smartBannerType = "foodEater";
  if (pathname.includes("food/restaurantes")) smartBannerType = "foodBusiness";
  if (pathname.includes("food/repartidores")) smartBannerType = "foodDelivery";
  if (pathname.includes("pasajero")) smartBannerType = "pax";
  return (
    <>
      <Seo title={title} desc={desc}></Seo>
      <Header></Header>
      {children}
      {sb ? <SmartBanner type={smartBannerType}></SmartBanner> : null}
      {pathname.includes("food") ? (
        <FooterFood></FooterFood>
      ) : (
        <Footer></Footer>
      )}
    </>
  );
};

export default Layout;
