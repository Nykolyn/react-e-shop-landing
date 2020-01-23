import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '../shared/Title';
import Button from '../shared/Button';
import Box from '../shared/Box';
import CardBenefitOption from './CardBenefitOption';
import COLORS, { boxShadow, boxShadowHover } from '../../styles/COLORS';

const PackagesItem = ({
  description,
  monthly_plan: plan,
  other_benefits: benefit,
  other_benefits_1: benefit1,
  other_benefits_2: benefit2,
  other_benefits_3: benefit3,
  other_benefits_4: benefit4,
}) => (
  <StyledCard hoverable bordered={false}>
    <CardWrapper>
      <CardTitleBox>
        <Title align="center" color="#fff" fontSize="20px" mb="4px">
          {description}
        </Title>
        <Title align="center" color="#fff" fontSize="20px" mb="0px">
          {plan}
        </Title>
      </CardTitleBox>
      <CardBody>
        {benefit && <CardBenefitOption text={benefit} />}
        {benefit1 && <CardBenefitOption text={benefit1} />}
        {benefit2 && <CardBenefitOption text={benefit2} />}
        {benefit3 && <CardBenefitOption text={benefit3} />}
        {benefit4 && <CardBenefitOption text={benefit4} />}
      </CardBody>
      <Box>
        <Box display="flex" justifyContent="space-around" mb="1em">
          <CardButton>Plan Only</CardButton>
          <CardButton>With Device</CardButton>
        </Box>
        <CardDetailsText>See all benefit details</CardDetailsText>
      </Box>
    </CardWrapper>
  </StyledCard>
);

const CardWrapper = styled(Box)`
  box-shadow: ${boxShadow};
  transition: all 0.4s;
  padding-bottom: 14px;
  border-radius: 16px;
  &:hover {
    box-shadow: ${boxShadowHover};
    transform: translateY(-2px);
  }
`;

const CardButton = styled(Button)`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.MAIN_BLUE_COLOR};
  width: 40%;
  border: 1px solid ${COLORS.MAIN_BLUE_COLOR};
`;

const StyledCard = styled(Box)`
  height: 500px;
  padding: 1em;
`;

const CardDetailsText = styled.p`
  margin: 0;
  color: #54b8e9;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
`;

const CardBody = styled.div`
  height: calc(500px - 80px - 100px);
  overflow: auto;
`;

const CardTitleBox = styled(Box)`
  border-radius: 16px 16px 0 0;
  background-color: #54b8e9;
  text-align: center;
  height: 80px;
  padding: 1em;
`;

PackagesItem.defaultProps = {
  other_benefits: '',
  other_benefits_1: '',
  other_benefits_2: '',
  other_benefits_3: '',
  other_benefits_4: '',
};

PackagesItem.propTypes = {
  description: PropTypes.string.isRequired,
  monthly_plan: PropTypes.string.isRequired,
  other_benefits: PropTypes.string,
  other_benefits_1: PropTypes.string,
  other_benefits_2: PropTypes.string,
  other_benefits_3: PropTypes.string,
  other_benefits_4: PropTypes.string,
};

export default PackagesItem;
