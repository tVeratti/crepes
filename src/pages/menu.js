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

const MenuPage = ({ data }) => {
  const content = useMemo(() => mapFrontmatter(data), [data]);

  return (
    <DataContext.Provider value={content}>
      <Layout>
        <SEO title="Menu" />
        <Menu />
      </Layout>
    </DataContext.Provider>
  );
};

export const pageQuery = graphql`
  query MenuQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/menu/*.md" } }) {
      edges {
        node {
          frontmatter {
            note
            title
            sections {
              note
              title
            }
          }
        }
      }
    }
  }
`;

export default MenuPage;
