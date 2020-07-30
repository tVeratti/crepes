import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 1085px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-bottom: 4px solid ${(props) => props.theme.gold};
  text-align: center;
`;

const Card = ({ style, children }) => {
  return <Container style={style}>{children}</Container>;
};

export default Card;
