import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';

import Box from '../shared/Box';

const StyledIcon = styled(Icon)`
  color: #fff;
`;

const HeaderIcon = ({ type, ...props }) => (
  <Box {...props}>
    <StyledIcon type={type} />
  </Box>
);

HeaderIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderIcon;
