import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";
import Sidebar from "./sidebar";
import Header from "./header";
import { queryPoints } from "../utils/vars";


const Main = styled.main`
  margin-left: 16.8rem;
  display: flex;
  justify-content: center;
  padding-top: 5em;
  @media screen and (max-width: ${queryPoints.pc}) {
    margin-left: 14rem;
  }
  @media screen and (max-width: ${queryPoints.mid}) {
    margin-left: 0;
  }
  @media screen and (max-width: ${queryPoints.small}) {
    padding-top: 7em;
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: ${queryPoints.mid}) {
    background-color: lavender;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
      content: "Resolution support is in progress"
    }
    > * {
      display: none;
    }
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
        <Header text={"Personal blog of Boris Burkov"}></Header>
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
