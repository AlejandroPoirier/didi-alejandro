import React from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FooterLinks } from "../config/footer-config";
import {
  FooterLinksFood,
  getFooterLinksFood,
} from "../config/footer-food-config";

interface FooterMenuProps {
  links: FooterLinks[];
}

const FooterMenu = ({ links }: FooterMenuProps) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const footerLinksFood: FooterLinksFood[] = getFooterLinksFood(countryCode);

  return (
    <div className="flex h-full flex-wrap bg-gray-primary">
      <div className="Lg:flex-row bg-grey-primary hidden lg:flex lg:w-2/3 lg:flex-initial">
        {pathname.includes("food") ? (
          <>
            {footerLinksFood.map((linkFood, index) => (
              <div
                key={index}
                className="flex flex-auto items-center justify-center text-lg"
              >
                <a
                  href={linkFood.link}
                  className="hover:text-white hover:opacity-70"
                >
                  {linkFood.text}
                </a>
              </div>
            ))}
          </>
        ) : (
          <>
            {links.map((link: FooterLinks, index: number) => (
              <div
                key={index}
                className="flex flex-auto items-center justify-center text-lg"
              >
                <a
                  href={link.link}
                  className="hover:text-white hover:opacity-70"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FooterMenu;
