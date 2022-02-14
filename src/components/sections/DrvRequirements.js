import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AccordionSection from "../AccordionSection";

const Requerimientos = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { section: { eq: "cl-drv-requirements" } }
          fileAbsolutePath: {}
        }
      ) {
        nodes {
          body
          frontmatter {
            title
          }
        }
      }
    }
  `);

  let items = [];
  data.allMdx.nodes.forEach((node) => {
    items.push({
      title: node.frontmatter.title,
      content: node.body,
    });
  });
  const title = "Requerimientos";
  return (
    <AccordionSection
      items={items}
      title={title}
      bgColor="bg-gray-light"
      bgAccordionColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
    ></AccordionSection>
  );
};

export default Requerimientos;