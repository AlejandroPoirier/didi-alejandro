const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const municipalityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulMunicipality(filter: {city: {country: {code: {ne: null}}}}) {
        nodes {
          id
          name
          slug
          city {
            name
            slug
            country {
              code
              name
            }
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
  const templatePath = `./src/pages/templates/food-municipality-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulMunicipality.nodes.forEach((node) => {
    const { id, slug, city } = node;
    const municipalitySlug = slug;
    
    if(city.country?.code) {
      let path = `/${city.country.code}/food/colonia/${municipalitySlug}/`;

      createPage({
        path: path,
        component: template,
        context: {
          id: id,
        },
      });
    }
  });
};

module.exports.init = municipalityRoutesInit;