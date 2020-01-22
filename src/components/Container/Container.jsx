import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ width }) => width || '90%'};
  margin: 0 auto;
`;

export default Container;