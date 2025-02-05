const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const placesInCityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(
        filter: { country: { code: { in: ["cl", "ar", "pe"] } } }
      ) {
        nodes {
          id
          slug
          country {
            code
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // function to create pages from a WP parent node and a specific template
  const templatePath = `./src/pages/templates/places-in-city-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, slug, country } = node;
    let path = `/${country.code}/lugares/lugares-en-${slug}`;
    createPage({
      path: path,
      component: template,
      context: {
        id: id,
      },
    });
  });
};

module.exports.init = placesInCityRoutesInit;
