import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {console.log(data)}
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/menu/*.md" } }) {
      edges {
        node {
          frontmatter {
            title
            note
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

export default IndexPage;
