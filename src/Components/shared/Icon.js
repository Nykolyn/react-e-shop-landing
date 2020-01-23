import React from 'react';
import PropTypes from 'prop-types';
import { Icon as AntdIcon } from 'antd';
import styled from 'styled-components';

import COLORS from '../../styles/COLORS';
import Box from './Box';

const Icon = ({ type, fontSize, color, ...props }) => (
  <Box {...props}>
    <StyledIcon fontSize={fontSize} type={type} />
  </Box>
);

const StyledIcon = styled(AntdIcon)`
  color: ${({ color }) => color};
  transition: all 0.4s;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  &:hover {
    color: ${COLORS.MAIN_BLUE_COLOR};
  }
`;

Icon.defaultProps = {
  fontSize: '14px',
  color: COLORS.WHITE,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
