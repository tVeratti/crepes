import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Parallax from '../components/parallax';
import Card from '../components/card';

import Crepe01 from '../images/crepe_01.jpg';
import { Link } from 'gatsby';

const Hero = styled.div`
  padding: 188px 40px;
  height: 600px;
`;

const Blue = styled.div`
  padding: 40px;
  background: ${(props) => props.theme.blue00};
`;

const CardBody = styled.div`
  display: flex;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax image={Crepe01}>
        <Hero>
          <Card>
            <h2>
              EAT
              <br />
              DRINK
              <br />
              RELAX
            </h2>
          </Card>
        </Hero>
        <Blue>
          <Card style={{ marginTop: '-60px' }}>
            <CardBody>
              <h3>Today's Hours</h3>
              We're open from 8:30am to 3pm
              <Link>Full Hours</Link>
            </CardBody>
          </Card>
        </Blue>
      </Parallax>
    </Layout>
  );
};

export default IndexPage;
