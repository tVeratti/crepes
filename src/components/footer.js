import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.footer`
  padding: 56px 0;
  background: ${props => props.theme.blue00};
  color: white;
  text-align: center;

  a,
  a:visited {
    color: white;
  }
`;

const Title = styled.div`
  font-family: 'Abril Fatface', cursive;
  font-size: 24px;
  text-transform: uppercase;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  a {
    display: inline-block;
    margin: 16px 0;
  }
`;

const Footer = ({ siteTitle }) => {
  return (
    <Container>
      <Title>{siteTitle}</Title>
      <Links>
        <li>
          <Link href="/">Menus</Link>
        </li>
        <li>
          <Link href="/">Hours & Information</Link>
        </li>
        <li>
          <Link href="/">COVID-19</Link>
        </li>
      </Links>
      <p>2816 E 3rd ave, Denver CO 80206</p>
      <p>303-320-4184</p>
    </Container>
  );
};

export default Footer;
