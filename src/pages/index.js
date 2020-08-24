import React from 'react';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Parallax from '../components/parallax';
import Card, { CardBody } from '../components/card';
import MenuCard from '../components/menuCard';

import Crepe01 from '../images/crepe_01.jpg';
import Savory01 from '../images/savory_01.png';
import Sweet01 from '../images/sweet_01.png';

const Hero = styled.div`
  padding: 188px 40px;
  height: 600px;
`;

const BigText = styled.h2`
  font-family: 'Abril Fatface', cursive;
  font-size: 48px;
  color: ${props => (props.white ? 'white' : props.theme.blue00)};
  text-transform: uppercase;
  text-align: center;

  ${props =>
    props.white &&
    css`
      margin: 40px 24px;
    `}
`;

const Blue = styled.div`
  padding: 40px 0;
  background: ${props => props.theme.blue00};
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
        <Card style={{ marginTop: '-60px' }} flex>
          {/* Hours */}
          <CardBody
            title="TODAY'S HOURS"
            text="We're open from 8:30am to 3pm"
            link="Full Hours"
            href="/"
          />

          {/* Location */}
          <CardBody
            title="DINE-IN"
            text="Find us in downtown Denver, CO"
            link="Google Maps"
            href="/"
          />

          {/* Phone */}
          <CardBody
            title="ORDER NOW"
            text="Call for delivery or take-out"
            link="303-320-4148"
            href="tel:303-320-4148"
          />
        </Card>
        <BigText white>Something for every taste</BigText>
      </Blue>
      <MenuCard
        image={Savory01}
        title="SAVORY ENTREES"
        text="Poulet Au Gratin, Seafood Provencal, and more"
        link="Menu"
        href="/"
      />
      <MenuCard
        image={Sweet01}
        title="SWEET DESERTS"
        text="Heather's Favorite Strawberries, Crepe Suzette, and more"
        link="Menu"
        href="/"
      />
    </Layout>
  );
};

export default IndexPage;
