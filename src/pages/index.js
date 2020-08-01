import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Parallax from '../components/parallax';
import Card from '../components/card';

import Crepe01 from '../images/crepe_01.jpg';
import Savory01 from '../images/savory_01.png';
import Sweet01 from '../images/sweet_01.png';

const Hero = styled.div`
  padding: 188px 40px;
  height: 600px;
`;

const BigText = styled.h2`
  font-size: 48px;
  color: ${(props) => (props.white ? 'white' : props.theme.blue00)};
  text-transform: uppercase;
  text-align: center;

  ${(props) =>
    props.white &&
    css`
      margin: 40px 24px;
    `}
`;

const Blue = styled.div`
  padding: 40px;
  background: ${(props) => props.theme.blue00};
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax image={Crepe01}>
        <Hero>
          <Card>
            <BigText>
              EAT
              <br />
              DRINK
              <br />
              RELAX
            </BigText>
          </Card>
        </Hero>
      </Parallax>
      <Blue>
        <Card style={{ marginTop: '-60px' }}>
          {/* Hours */}
          <CardBody>
            <h3>TODAY'S HOURS</h3>
            We're open from 8:30am to 3pm
            <Link>Full Hours</Link>
          </CardBody>

          {/* Location */}
          <CardBody>
            <h3>DINE-IN</h3>
            Find us in downtown Denver, CO
            <Link>Google Maps</Link>
          </CardBody>

          {/* Phone */}
          <CardBody>
            <h3>ORDER NOW</h3>
            Call for delivery or take-out
            <Link href="tel:303-320-4148">303-320-4148</Link>
          </CardBody>
        </Card>
        <BigText white>Something for every taste</BigText>
      </Blue>
      <Parallax image={Savory01}>
        <Card>
          <CardBody>
            <h3>SAVORY ENTREES</h3>
            Poulet Au Gratin, Seafood Provencal, and more
            <Link>Menu</Link>
          </CardBody>
        </Card>
      </Parallax>
      <Parallax image={Sweet01}>
        <Card>
          <CardBody>
            <h3>SWEET DESERTS</h3>
            Heather's Favorite Strawberries, Crepe Suzette, and more
            <Link>Menu</Link>
          </CardBody>
        </Card>
      </Parallax>
    </Layout>
  );
};

export default IndexPage;
