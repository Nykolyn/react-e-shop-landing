import React from 'react';
import styled from 'styled-components';

import HeaderTitle from '../Header/HeaderTitle';
import HeaderIcon from '../Header/HeaderIcon';
import Box from '../shared/Box';
import DropDown from '../Header/DropDown';

const Navigation = () => (
  <Box display="flex" justifyContent="space-between">
    <Box display="flex" alignItems="center">
      <SiteLogo>ZAIN</SiteLogo>
      <StyledMenu>
        <DropDown dropDown={['option 1', 'option 2']}>Devices</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Mobiles</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Home</DropDown>
        <DropDown dropDown={['option 1', 'option 2']}>Accessories</DropDown>
      </StyledMenu>
    </Box>
    <Box display="flex">
      <HeaderIcon mr={20} type="search" />
      <HeaderTitle>Login</HeaderTitle>
    </Box>
  </Box>
);

const SiteLogo = styled(HeaderTitle)`
  margin-right: 40px;
  font-size: 40px;
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
