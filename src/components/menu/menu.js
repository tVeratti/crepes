import React, { useContext } from 'react';
import DataContext from '../../context';

const Menu = () => {
  const context = useContext(DataContext);
  console.log(context);
  return <article>Menu</article>;
};

export default Menu;
