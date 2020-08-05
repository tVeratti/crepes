import React from 'react';
import styled from 'styled-components';

import Background from './background';
import Card, { CardBody } from './card';

const Image = styled(Background)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
`;

const Menu = styled.div`
  position: relative;
  padding: 102px 0;
  overflow: hidden;

  &:hover {
    ${Image} {
      transform: scale(1.05);
    }
  }
`;

const CardOver = styled(Card)`
  z-index: 1;
`;

const MenuCard = ({ image, ...props }) => {
  return (
    <Menu>
      <Image image={image} />
      <CardOver>
        <CardBody {...props} />
      </CardOver>
    </Menu>
  );
};

export default MenuCard;
