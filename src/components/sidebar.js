import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import SidebarButton from "./sidebar-button";
import { colors, queryPoints } from "../utils/vars";
import photo from "../../content/assets/burkov-boris-web.jpg";


const Sidebar = styled.section`
  position: fixed;
  width: 250px;
  @media screen and (max-width: ${queryPoints.mid}) {
    width: 0;
  }
  height: 100%;
  z-index: 1;
  padding-top: 5em;
  margin-right: 2em;
  background-color: ${colors.white};
  color: ${colors.textMain};
//  border-right: 0.05em solid ${colors.main25};
  transition: 0.5s;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // @media screen and (max-width: ${queryPoints.small}) {
  //   padding-top: 7em;
  //   width: 0;
  // }
  
`;

const nav = styled.div`
  backgroundColor: colors.white;
  width: 100%;
`;

const navItem = `
  display: flex;
  align-items: center;
  // margin-left: 2em;
  padding: 0.5em 1em 0.5em 0.5em;
//  border-bottom: 0.05em solid ${colors.main25};
  position: relative;
  color: #635e69; // ${colors.textBody};
  text-decoration: none;
  transition: 0.5s;
  &:before {
    content: '';
    transition: inherit;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    left: 0.8em;
    border-radius: 50%;
    display: block;
//    background-color: ${colors.main};
    transform: scale(0);
    text-transform: capitalize;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${colors.main};
    &:before {
      transform: scale(1);
    }
  }
  @media screen and (max-width: ${queryPoints.mid}) {
    padding-left: calc(1.5rem - 5px);
    margin-left: calc(-1.5rem - 5px);
    &:before {
      display: none;
    }
  }

  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--theme-ui-colors-grey-60,#635e69);
  margin-bottom: 0;
  padding-top: 0.2rem;
  padding-right: 1rem;
  padding-bottom: 0.2rem;
  padding-left: calc(1.25rem + 1px);
  margin-left: calc(-1.25rem);
  border-left: 1px solid var(--theme-ui-colors-grey-30,#d9d7e0);
`;

const navHeader = `
  display: flex;
  align-items: center;
  padding: 14px 2em 10px 0em;
  color: var(--theme-ui-colors-grey-60,#635e69);
  position: relative;
//  color: ${colors.textBody};
  text-decoration: none;
  transition: 0.5s;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: ${queryPoints.mid}) {
    margin-left: 0;
    padding-left: 0em;
    &:before {
      display: none;
    }
  }
`;

const AboutLink = styled.a`
  width: 50%;
  > img {
    margin: 0;
  }
`;

const AboutSection = styled.div`
  width: 100%;
  font-size: 70%;
  padding: 1em 2.0em;
  a {
    color: inherit;
    margin-left: 0.3em;
  }
  @media screen and (max-width: ${queryPoints.mid}) {
    margin-left: 0;
    padding-left: 1em;
  }

  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--theme-ui-colors-grey-60,#635e69);
`;

const tag = `
    display: inline-block;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 600;
    background-color: var(--theme-ui-colors-grey-20,#f0f0f2);
    color: var(--theme-ui-colors-grey-60,#635e69);
    padding-left: calc(3 * 0.125rem);
    padding-right: calc(3 * 0.125rem);
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    border-radius: 9999px;
    background-color: #f0f0f2;
    color: #635e69;
    background: var(--theme-ui-colors-grey-5,#fbfbfb);
    font-size: 11px;
    font-weight: 400;
    margin-left: 0.25rem;
`;

const buttonStyle = `
  position: fixed;
  z-index: 20;
  bottom: 1em;
  right: 1em;
  display: none;
  @media screen and (max-width: ${queryPoints.mid}) {
    display: flex;
  }
`;

const activeButtonStyle = `
  >img:nth-child(1) {
    transform: translateY(70%) rotateZ(180deg);
  }
  >img:nth-child(2) {
    transform: translateY(-70%);
  }
`;

const showSidebar = `
  @media screen and (max-width: ${queryPoints.mid}) {
    width: 250px;
  }
`;

class SidebarComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  render() {
    // Destructuring assignments
    const {
      data: {
        allMarkdownRemark: {
          edges,
          group
        },
        allFile: {
          edges: files
        },
        site: {
          siteMetadata: {
            author,
            social: {
              telegram
            }
          }
        }
      }
    } = this.props;
    const { active } = this.state;
   /* const fileMap = files.reduce((prev, {node:{name, publicURL}}) => ({...prev, [name]: publicURL}), {}); */

    //
    return (
      <Sidebar css={active && showSidebar}>
        <SidebarButton
          styles={[buttonStyle, active && activeButtonStyle]}
          onClick={() => this.setState({ active: !active })}
        />
        <AboutLink href="/">
          <img src={photo} alt="my photo" />
        </AboutLink>
        <AboutSection>
          Written by <strong>{author}</strong> who lives in Moscow, Russia, loves to take part in
          development of cutting-edge technologies, reflects on how the world works and admires the giants of the past.
          <br />
          <br />
          {` `}
          <a href={`https://t.me/${telegram}`}>You can follow me in <strong>Telegram</strong></a>
        </AboutSection>
        <div css={nav}>
          {
            [<h4 key={'categories header'} css={navHeader}>Categories</h4>,
            group.map(g => (
              <Link to={`/tags/${g.fieldValue}`} key={g.fieldValue} css={navItem}>{g.fieldValue} <span css={tag}>{g.totalCount}</span></Link>
            ))]
          }
        </div>
      </Sidebar>
    )
  }
}


export default ({ locale }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
          group(field: {frontmatter: {tags: SELECT}}) {
            fieldValue
            totalCount
          }
          edges {
            node {
              frontmatter {
                title,
              }
            }
          }
        }
        allFile(filter: {extension: {eq: "svg"}}) {
          edges {
            node {
              publicURL,
              name
            }
          }
        }
        avatar: file(absolutePath: { regex: "/burkov-boris-web.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
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
    `}
    render={(data) => <SidebarComponent locale={locale} data={data} />}
  />
)
