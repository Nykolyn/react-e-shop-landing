import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as AppleIcon } from '../../assets/icons/brands-and-logotypes.svg';
import { ReactComponent as SamsungIcon } from '../../assets/icons/samsung.svg';
import { ReactComponent as HuaweiIcon } from '../../assets/icons/huawei.svg';
import { ReactComponent as OneplusIcon } from '../../assets/icons/one-plus.svg';

import { getPackages } from '../../redux/packages/actions';
import Box from '../shared/Box';
import Title from '../shared/Title';
import Container from '../Container';
import PackagesSlider from './PackagesSlider';
import Button from '../shared/Button';
import COLORS, { boxShadow } from '../../styles/COLORS';

const devices = [
  { name: 'all', Icon: 'All' },
  { name: 'apple', Icon: <AppleIcon width={25} height={25} /> },
  { name: 'samsung', Icon: <SamsungIcon width={35} height={35} /> },
  { name: 'huawei', Icon: <HuaweiIcon width={25} height={25} /> },
  { name: 'oneplus', Icon: <OneplusIcon width={25} height={25} /> },
];

const packagePlans = ['Go Postpaid Plans', 'Go Family', 'Go Governorates'];

const Description = styled.p`
  margin: 0;
  margin-bottom: 2em;
  width: 90%;
  line-height: 30px;
`;

const LoremDescription = () => (
  <Description>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet beatae
    alias ducimus molestias quo doloribus, odit, fugiat dolor minima dignissimos
    magni quos, earum optio recusandae sed maiores esse accusamus? Natus sint
    sed officiis, voluptatem itaque autem tempora esse tempore omnis ipsa totam
    rerum deleniti repellat distinctio impedit ut, quas aliquam officia
    perspiciatis similique perferendis assumenda! Est quae voluptatibus
    temporibus.
  </Description>
);

const Packages = ({ getPackages }) => {
  const [activeIcon, setActiveIcon] = useState('all');
  const [activePlanBtn, setActivePlanBtn] = useState('Go Postpaid Plans');
  useEffect(() => {
    getPackages();
  }, [getPackages]);
  return (
    <Container width="80%">
      <Title fontWeigth={700}>Go Packages</Title>
      <LoremDescription />
      <StyledButtonGroup>
        {packagePlans.map(plan => (
          <Button
            key={plan}
            active={activePlanBtn === plan ? 'true' : null}
            onClick={() => setActivePlanBtn(plan)}
          >
            {plan}
          </Button>
        ))}
      </StyledButtonGroup>
      <Title>Go Postpaid Plans</Title>
      <LoremDescription />
      <Box mb="2em">
        <PackagesSlider />
      </Box>
      <Title align="center">Eligible device for this plan:</Title>
      <IconsWrapper>
        {devices.map(device => (
          <BrandIconButton
            active={activeIcon === device.name}
            key={device.name}
            onClick={() => setActiveIcon(device.name)}
          >
            {device.Icon}
          </BrandIconButton>
        ))}
      </IconsWrapper>
    </Container>
  );
};

const IconsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 3em;
`;

const BrandIconButton = styled.button`
  border: 1px solid #666;
  margin-right: 10px;
  transition: all 0.2s;
  outline: none;
  background-color: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  fill: black;
  &:hover {
    border-color: transparent;
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: ${COLORS.WHITE};
    fill: ${COLORS.WHITE};
  }

  ${({ active }) =>
    active &&
    `
    border-color: transparent;
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    color: ${COLORS.WHITE};
    fill: ${COLORS.WHITE};
    box-shadow: 0px 0px 9px 0px rgba(84,184,233,1);
  `}
`;

const StyledButtonGroup = styled(Box)`
  display: block;
  box-shadow: ${boxShadow};
  margin: 2em auto;
  width: 378px;
  border-radius: 20px;
  text-align: center;
`;

Packages.propTypes = {
  getPackages: PropTypes.func.isRequired,
};

const mDTP = {
  getPackages,
};

export default connect(null, mDTP)(Packages);
