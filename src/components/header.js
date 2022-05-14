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
  background-color: ${colors.white}; // ${colors.second};
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

const Name = styled.div`
    font-family: Montserrat,sans-serif;
    width: 250px;
//    borderRight: 1px solid ${colors.main25};
    text-align: center;
    padding: 0.5em;
`;

const NameLink = styled.a`
    color: var(--theme-ui-colors-grey-60,#635e69);
    letter-spacing: 2px;
    font-weight: 500;
//    color: var(--theme-ui-colors-grey-60,#635e69);
`;

const Quote = styled.span`
  opacity: 0.8;
  font-size: 90%;
`;

export default ({ text }) => (
  <Header>
    <Name>
        <NameLink href="/">BorisBurkov.net</NameLink>
    </Name>
  </Header>
)