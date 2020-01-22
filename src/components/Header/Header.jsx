import React from 'react';
import { Input, Select } from 'antd';
import styled from 'styled-components';

import Container from '../Container';
import Navigation from '../Navigation';
import Box from '../shared/Box';
import DropDown from './DropDown';
import StyledIcon from './HeaderIcon';
import HeaderTitle from './HeaderTitle';

const StyledOption = styled(Select.Option)`
  min-width: 60px;
  text-align: center;
`;

const selectBefore = (
  <Select defaultValue="All">
    <StyledOption value="All">All</StyledOption>
    <StyledOption value="option 1">Option 1</StyledOption>
    <StyledOption value="option 2">Option 2</StyledOption>
  </Select>
);

const StyledHeader = styled.header`
  background-color: #000;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt="1em"
        mb="2em"
      >
        <DropDown dropDown={['option 1', 'option 2']} width="8%" mr="2em">
          Zain Personal
        </DropDown>
        <Box width="70%" mr="2em">
          <Input.Search
            enterButton
            addonBefore={selectBefore}
            placeholder="Search..."
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width="20%"
          justifyContent="space-between"
        >
          <HeaderTitle>ع</HeaderTitle>
          <HeaderTitle>Track orders</HeaderTitle>
          <StyledIcon type="heart" />
          <StyledIcon type="shopping-cart" />
        </Box>
      </Box>
      <Navigation />
    </Container>
  </StyledHeader>
);

export default Header;
