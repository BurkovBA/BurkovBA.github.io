import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors, queryPoints } from "../utils/vars";

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.second};
  color: ${colors.text};
  border-bottom: 0.05em solid ${colors.main25}
`;

const langLink = `
  margin-left: 0.5em;
  color: inherit;
  opacity: 0.8;
  transition: 0.2s;
  font-size: 90%;
  
  &:hover {
    opacity: 1;
  }
`;

const NameLink = styled.a`
  color: inherit;
  margin-right: 0.5em;
`;

const Quote = styled.span`
  opacity: 0.8;
  font-size: 90%;
`;

export default ({ text }) => (
  <Header>
    <div style={{width: '250px', borderRight: `1px solid ${colors.main25}`, textAlign: 'center', padding: '0.5em'}}>
        <a href="/">BorisBurkov.net</a>
    </div>
    <div>
      <Link to="/ru" css={langLink} >
        RU
      </Link>
      <Link to="/ua" css={langLink} >
        UK
      </Link>
    </div>
  </Header>
)