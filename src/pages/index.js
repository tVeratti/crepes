import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';

import DataContext from '../context';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/menu';

const mapFrontmatter = (data) => {
  return data?.allMarkdownRemark?.edges.map((e) => e.node.frontmatter) || [];
};

const IndexPage = ({ data }) => {
  const content = useMemo(() => mapFrontmatter(data), [data]);

  return (
    <DataContext.Provider value={content}>
      <Layout>
        <SEO title="Home" />
        <Menu />
      </Layout>
    </DataContext.Provider>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/menu/*.md" } }) {
      edges {
        node {
          frontmatter {
            title
            note
            sections {
              title
              note
              items {
                title
                description
                price
                image
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
