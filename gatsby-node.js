const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve("src/templates/tag.js");

  return graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: {date: DESC}}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                description
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    // Create tag pages
    let tags = [];

    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    });

    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Actually make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
          location: {pathname: `/tags/${_.kebabCase(tag)}/`}
        },
      })
    });

    return null;
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
