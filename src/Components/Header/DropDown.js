import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';

import Box from '../shared/Box';
import Icon from '../shared/Icon';
import HeaderTitle from './HeaderTitle';

const DropDownMenu = menu => (
  <Menu>
    {menu.length && menu.map(link => <Menu.Item key={link}>{link}</Menu.Item>)}
  </Menu>
);

const DropDown = ({ dropDown, level, children, ...props }) => {
  return (
    <Dropdown overlay={() => DropDownMenu(dropDown)}>
      <Box display="flex" alignItems="center" {...props}>
        <HeaderTitle level={level}>{children}</HeaderTitle>
        <Icon ml={2} type="caret-down" />
      </Box>
    </Dropdown>
  );
};

DropDown.defaultProps = {
  dropDown: null,
  level: 4,
};

DropDown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  level: PropTypes.number,
  dropDown: PropTypes.arrayOf(PropTypes.string),
};

export default DropDown;
