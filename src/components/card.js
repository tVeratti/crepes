import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 304px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-bottom: 4px solid ${props => props.theme.gold};
  text-align: center;

  ${props =>
    props.flex &&
    css`
      @media (min-width: 720px) {
        display: flex;
        align-items: top;
        justify-content: space-around;
        max-width: 1085px;
      }
    `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Abril Fatface', cursive;
    font-size: 24px;
  }

  p {
    margin: 8px 0;
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Card = ({ style, children, flex }) => (
  <Container style={style} flex={flex}>
    {children}
  </Container>
);

export const CardBody = ({ title, text, link, href }) => (
  <Body>
    <h3>{title}</h3>
    <p>{text}</p>
    <Link href={href}>{link}</Link>
  </Body>
);

export default Card;
