import React from 'react';
import { Select, Typography } from 'antd';
import styled from 'styled-components';

import DevicesList from './DevicesList';
import Box from '../shared/Box';

const { Option } = Select;
const { Text } = Typography;

const sortOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Samsung', value: 'samsung' },
  { label: 'Huawei', value: 'huawei' },
  { label: 'OnePlus', value: 'onePlus' },
];

const Devices = () => (
  <Box>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="2em"
    >
      <Text>22 results found</Text>
      <Box display="flex" alignItems="center">
        <Text>Sort by name: </Text>
        <StyledSelect defaultValue="Select...">
          {sortOptions.map(phone => (
            <Option key={phone.value} value={phone.value}>
              {phone.label}
            </Option>
          ))}
        </StyledSelect>
      </Box>
    </Box>
    <DevicesList />
  </Box>
);

const StyledSelect = styled(Select)`
  min-width: 100px;
  margin-left: 10px;
`;

export default Devices;
