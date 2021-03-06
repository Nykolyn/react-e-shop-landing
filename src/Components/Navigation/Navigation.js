import React from 'react';
import styled from 'styled-components';

import HeaderTitle from '../Header/HeaderTitle';
import Icon from '../shared/Icon';
import Box from '../shared/Box';
import DropDown from '../Header/DropDown';
import siteLogo from '../../assets/header-logo.png';
import COLORS from '../../styles/COLORS';

const Navigation = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box display="flex" alignItems="center">
      <SiteLogo src={siteLogo} />
      <StyledMenu>
        <DropDown dropDown={['option 1', 'option 2']}>Devices</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Mobiles</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Home</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Accessories</DropDown>
      </StyledMenu>
    </Box>
    <Box display="flex">
      <SeacrhIcon mr={20} type="search" />
      <HeaderTitle>Login</HeaderTitle>
    </Box>
  </Box>
);

const SiteLogo = styled.img`
  cursor: pointer;
  margin-right: 4em;
  padding-bottom: 4px;
`;

const SeacrhIcon = styled(Icon)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    height: 14px;
    background-color: ${COLORS.WHITE};
  }
`;

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  width: 400px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

export default Navigation;
