import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${props => props.image});
  background-attachment: ${props => (props.fixed ? 'fixed' : 'local')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

export default Background;
