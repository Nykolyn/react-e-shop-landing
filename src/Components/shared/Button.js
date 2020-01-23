import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

import COLORS from '../../styles/COLORS';

const Button = styled(AntdButton)`
  &:hover {
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: #fff;
  }
`;

export default Button;
