import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export function useParallax(speed = 0.8) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      const offset = -pageYOffset * speed;

      setTop(offset);
    };
    if (speed > 0) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return top;
}

const Background = styled.div`
  background-image: url(${props => props.image});
  background-attachment: ${props => (props.fixed ? 'fixed' : 'local')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

const Parallax = ({ image, children, off }) => {
  const top = useParallax(off ? 0.0 : 0.5);
  // const [offset, setOffset] = useState(0);
  // const ref = useRef();

  // useEffect(() => {
  //   if (ref.current) {
  //     const position = ref.current.getBoundingClientRect().top;
  //     const { innerHeight } = window;
  //     const beyond = position - innerHeight;
  //     setOffset(beyond > 0 ? beyond : 0);
  //   }
  // }, [ref.current]);

  return (
    <Background
      image={image}
      fixed={!off}
      style={{
        backgroundPosition: `center ${top}px`,
      }}
    >
      {children}
    </Background>
  );
};

export default Parallax;
