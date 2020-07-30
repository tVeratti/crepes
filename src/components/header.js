import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: relative;
`;

const Covid = styled.div`
  padding: 8px;
  background: ${(props) => props.theme.gold};
  color: ${(props) => props.theme.blue01};
  text-align: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 100%;
  width: 100%;
  text-transform: uppercase;
  text-align: center;

  a,
  a:visited {
    color: ${(props) => props.theme.blue00};
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <Covid>
        <Link>COVID-19 Update</Link>
      </Covid>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </div>
  </Container>
);

export default Header;
