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
  background-color: ${colors.textSecond};
  color: ${colors.textMain};
  border-right: 0.05em solid ${colors.main25};
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

const navItem = `
  display: flex;
  align-items: center;
  // margin-left: 2em;
  padding: 0.5em 1em 0.5em 2em;
  border-bottom: 0.05em solid ${colors.main25};
  postion: relative;
  color: ${colors.textBody};
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
    background-color: ${colors.main};
    transform: scale(0);
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
    margin-left: 0;
    padding-left: 1em;
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
  padding: 1em 2.5em;
  a {
    color: inherit;
    margin-left: 0.3em;
  }
  @media screen and (max-width: ${queryPoints.mid}) {
    margin-left: 0;
    padding-left: 1em;
  }
  border-bottom: 1px solid ${colors.main25};
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
        <AboutLink href="https://borisburkov.net/about">
          <img src={photo} alt="my photo" />
        </AboutLink>
        <AboutSection>
          Written by <strong>{author}</strong> who lives in Moscow, Russia and Cambridge, UK, loves to think about
          future, build our present and admire heroes of the past.
          {` `}
          <a href={`https://t.me/${telegram}`}>
            You can follow me on Telegram
          </a>
        </AboutSection>
        <div style={{backgroundColor: colors.second}}>
          {
            // edges.map(({
            //   node: {
            //     frontmatter: {
            //       title
            //     },
            //   }
            // }) => (
            //   <Link activeStyle={{ color: colors.main, fontWeight: 800 }} to={`${title}`} key={title} css={navItem}>{title}</Link>
            // ))
            group.map(g => (
              <Link to={`tags/${g.fieldValue}`} key={g.fieldValue} css={navItem}>{g.fieldValue} ({g.totalCount})</Link>
            ))
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
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          group(field: frontmatter___tags) {
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
