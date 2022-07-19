import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import FooterLink from "./FooterLink";
import { getFooterLinks } from "../config/footer-config";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCountry {
        nodes {
          name
          hostname
        }
      }
    }
  `);
  const countries = data.allContentfulCountry.nodes;
  const { i18n } = useTranslation();
  const countryCode = i18n.language;
  const links = getFooterLinks(countryCode);

  return (
    <footer>
      <div className="border-buffer h-32 border-x-0 border-b-2 border-t-0 border-solid border-white bg-gray-primary text-white ">
        <div className="container mx-auto h-full">
          <FooterLink links={links}></FooterLink>
        </div>
      </div>

      <div className="h-96 bg-gray-primary lg:h-80">
        <div className="container mx-auto flex h-full flex-wrap">
          <div className="flex h-1/2 w-full flex-initial flex-col items-center justify-center lg:h-full lg:w-1/2 lg:items-start">
            <Link to="/cl">
              <StaticImage
                src="../images/didi-logo.png"
                alt="DiDi"
                width={180}
              />
            </Link>

            <div className="text-c h-auto w-3/4 lg:w-full lg:pr-52 lg:text-left">
              {countries.map((c: any, index: number) => {
                if (index === 0) {
                  return (
                    <a
                      href={c.hostname}
                      key={index}
                      className="text-sm text-yellow-500 hover:text-yellow-300"
                    >
                      {c.name}
                    </a>
                  );
                } else {
                  return (
                    <span key={index} className="text-white">
                      {" "}
                      •{" "}
                      <a
                        href={c.hostname}
                        className="text-sm text-yellow-500 hover:text-yellow-300"
                      >
                        {c.name}
                      </a>
                    </span>
                  );
                }
              })}
            </div>
          </div>

          <div className="flex h-1/2 w-full flex-initial flex-wrap items-center justify-center px-24 lg:h-full lg:w-1/2 xl:px-32 ">
            <div className="flex w-full justify-center lg:w-auto">
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="mr-5 text-5xl text-white">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;