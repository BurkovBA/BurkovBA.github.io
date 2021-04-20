import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { IoIosTime, IoIosCalendar } from 'react-icons/io';

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

import "katex/dist/katex.min.css";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const cover = this.props.data.markdownRemark.frontmatter.cover;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle} cover={cover}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {!!cover ? <Img sizes={cover.childImageSharp.sizes} style={{marginLeft: '-20px'}} /> : null}
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p style={{...scale(-1 / 5), display: `block`, marginBottom: rhythm(1)}}>
          <span style={{paddingRight: '50px'}}><IoIosCalendar/> {post.frontmatter.date}</span>
          <span><IoIosTime /> {post.timeToRead} min read</span>
        </p>

        <p>{post.frontmatter.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")        
        cover {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        description
      }
    }
  }
`;
