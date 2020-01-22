import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ width }) => width || '1200px'};
  padding: 1em;
  margin: 0 auto;
`;

export default Container;
