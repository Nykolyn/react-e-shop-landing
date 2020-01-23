import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

import COLORS from '../../styles/COLORS';

const Button = styled(AntdButton)`
  border-radius: 20px !important;
  border: none;
  &:hover {
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: ${COLORS.WHITE};
  }
  &:focus {
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: ${COLORS.WHITE};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: ${COLORS.WHITE};
  `}
`;

export default Button;
