import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Icon } from 'antd';

import Box from '../shared/Box';

const { Text } = Typography;

const CardBenefitOption = ({ text }) => (
  <CardBenefitWrapper display="flex" alignItems="center">
    <BenefitIcon type="check" />
    <Text>{text}</Text>
  </CardBenefitWrapper>
);

const CardBenefitWrapper = styled(Box)`
  border-bottom: 1px solid #b2b3b8;
  padding: 1em;
`;

const BenefitIcon = styled(Icon)`
  margin-right: 1em;
`;

CardBenefitOption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardBenefitOption;
