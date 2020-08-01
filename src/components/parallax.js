import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export function useParallax(speed = 0.8) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      const offset = -pageYOffset * speed;

      setTop(offset);
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
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const position = ref.current.getBoundingClientRect().top;
      const { innerHeight } = window;
      const beyond = position - innerHeight;
      setOffset(beyond > 0 ? beyond : 0);
    }
  }, [ref.current]);

  return (
    <Background
      ref={ref}
      image={image}
      style={{
        backgroundPosition: `center ${top + offset}px`,
      }}
    >
      {children}
    </Background>
  );
};

export default Parallax;
