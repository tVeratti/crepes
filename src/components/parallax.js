import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export function useParallax(speed = 0.8) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      const offset = -pageYOffset * speed;
      const top = `${offset}px`;

      setTop(top);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return top;
}

const Background = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top center;
`;

const Parallax = ({ image, children }) => {
  const top = useParallax(0.3);

  return (
    <Background
      image={image}
      style={{
        backgroundPosition: `center ${top}`,
      }}
    >
      {children}
    </Background>
  );
};

export default Parallax;
