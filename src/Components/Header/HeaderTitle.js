import styled from 'styled-components';
import COLORS from '../../styles/COLORS';

const StyledTitle = styled.a`
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.WHITE};
  &:hover {
    color: ${COLORS.MAIN_BLUE_COLOR};
  }
`;

export default StyledTitle;
