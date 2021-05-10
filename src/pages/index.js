import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import { IoIosTime, IoIosCalendar } from 'react-icons/io';

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import {colors} from "../utils/vars";


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3 style={{marginBottom: rhythm(1 / 4)}}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
                <br/>
                <small style={{fontSize: '50%', color: colors.main50}}>
                  <span style={{paddingRight: '50px'}}><IoIosCalendar/>&nbsp;{node.frontmatter.date}</span>
                  <span><IoIosTime />&nbsp;{node.timeToRead}&nbsp;min&nbsp;read</span>
                </small>
              </h3>
              <GatsbyImage image={node.frontmatter.cover.childImageSharp.gatsbyImageData} />
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            description
          }
        }
      }
    }
  }
`;
