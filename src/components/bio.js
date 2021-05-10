/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/burkov-boris-web.jpg/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
      }
      site {
        siteMetadata {
          author
          social {
            telegram
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives in Moscow, Russia and Cambridge, UK, loves to take part in
        development of cutting-edge technologies, reflects on how the world works and admires the giants of the past.
        {` `}
        <a href={`https://t.me/${social.telegram}`}>
          You can follow me on Telegram
        </a>
      </p>
    </div>
  )
};

export default Bio;
