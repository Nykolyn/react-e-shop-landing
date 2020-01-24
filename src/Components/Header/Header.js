import React from 'react';
import { Input, Select } from 'antd';
import styled from 'styled-components';

import Container from '../Container';
import Navigation from '../Navigation';
import Box from '../shared/Box';
import DropDown from './DropDown';
import Icon from '../shared/Icon';
import HeaderTitle from './HeaderTitle';
import COLORS from '../../styles/COLORS';

const { Option } = Select;

const StyledSelect = styled(Select)`
  min-width: 80px;
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
        <HeaderList>
          <HeaderItem>
            <HeaderTitle>ع</HeaderTitle>
          </HeaderItem>
          <HeaderItem>
            <HeaderTitle dispaly="flex" alignItems="center">
              Track orders
            </HeaderTitle>
          </HeaderItem>
          <HeaderItem>
            <Icon fontSize="20px" type="heart" />
          </HeaderItem>
          <HeaderItem>
            <Icon fontSize="20px" type="shopping-cart" />
          </HeaderItem>
        </HeaderList>
      </Box>
      <Navigation />
    </Container>
  </StyledHeader>
);

const HeaderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
`;

const HeaderItem = styled.li`
  position: relative;
  &:nth-last-child(n + 2) ::after {
    content: '';
    width: 1px;
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    height: 16px;
    position: absolute;
  }
`;

const StyledHeader = styled.header`
  background-color: ${COLORS.BLACK};
`;

export default Header;
