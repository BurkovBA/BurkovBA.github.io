import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";
import Sidebar from "./sidebar";
import Header from "./header";
import { queryPoints } from "../utils/vars";


const Main = styled.main`
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1em;

  margin-left: 18.8rem; // 16.8rem + 2rem;
  margin-right: 14rem;
  
  @media screen and (max-width: ${queryPoints.pc}) {
    margin-right: 0rem;    
  }

  @media screen and (max-width: ${queryPoints.mid}) {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
  
  // @media screen and (max-width: ${queryPoints.mid}) {
  //   margin-left: 0;
  // }
  // @media screen and (max-width: ${queryPoints.small}) {
  //   padding-top: 7em;
  // }
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  // height: 100vh;

  @media screen and (max-width: ${queryPoints.mid}) {
    // background-color: lavender;    
    // &:before {
    //   content: "Resolution support is in progress"
    // }
    //
    // > * {
    //   display: none;
    // }
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, cover, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
            {!!cover ? <Img sizes={cover.childImageSharp.sizes} /> : null}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
            {!!cover ? <Img sizes={cover.childImageSharp.sizes} /> : null}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <Header text={"Personal blog of Boris Burkov"} />
        <Sidebar />
        <Main>{children}</Main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    )
  }
}

export default Layout;
