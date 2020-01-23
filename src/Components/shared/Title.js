import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  color: ${({ color }) => color || '#000'};
  margin-bottom: ${({ mb }) => mb || '20px'};
  text-align: ${({ align }) => align || 'left'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`;

export default Title;
