import React from 'react';
import { Input, Select } from 'antd';
import styled from 'styled-components';

import Container from '../Container';
import Navigation from '../Navigation';
import Box from '../shared/Box';
import DropDown from './DropDown';
import Icon from '../shared/Icon';
import HeaderTitle from './HeaderTitle';

const { Option } = Select;

const StyledSelect = styled(Select)`
  min-width: 80px;
  text-align: center;
`;

const selectBeforeOptions = (
  <StyledSelect defaultValue="All">
    <Option value="All">All</Option>
    <Option value="option 1">Option 1</Option>
    <Option value="option 2">Option 2</Option>
  </StyledSelect>
);

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
        <DropDown dropDown={['option 1', 'option 2']} width="120px" mr="2em">
          Zain Personal
        </DropDown>
        <Box width="60%" mr="2em">
          <Input.Search
            enterButton
            addonBefore={selectBeforeOptions}
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
          <Icon type="heart" />
          <Icon type="shopping-cart" />
        </Box>
      </Box>
      <Navigation />
    </Container>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background-color: #000;
`;

export default Header;