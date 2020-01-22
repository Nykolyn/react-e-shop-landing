import React from 'react';
import { Select, Typography } from 'antd';
import styled from 'styled-components';
import Box from '../shared/Box';
import { Title } from '../Packages/Packages';

const { Option } = Select;
const { Text } = Typography;

const sortOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Samsung', value: 'samsung' },
  { label: 'Huawei', value: 'huawei' },
  { label: 'OnePlus', value: 'onePlus' },
];

const deviceSample = {
  img:
    'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro/Midnight-Green/Apple-iPhone-11-Pro-Midnight-Green-frontimage.jpg',
  brand: 'Apple',
  model: 'Xs max',
  price: '70 JD/Month',
};
const devicesArr = [];
const drawDevices = () => {
  for (let i = 0; i < 22; i += 1) {
    devicesArr.push(deviceSample);
  }
};
drawDevices();

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
    <DevicesList>
      {devicesArr.map(device => (
        <DeviceListItem key={device.model}>
          <ImageWrapper>
            <DeviceImg src={device.img} alt={device.model} />
          </ImageWrapper>
          <DescWrapper>
            <Title>{device.brand}</Title>
            <Title>{device.model}</Title>
            <Title>{device.model}</Title>
          </DescWrapper>
        </DeviceListItem>
      ))}
    </DevicesList>
  </Box>
);

const StyledSelect = styled(Select)`
  min-width: 100px;
  margin-left: 10px;
`;

const DeviceListItem = styled.li`
  width: 19%;
  box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 1);
  border-radius: 20px;
  margin-right: 14px;
  margin-bottom: 2em;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const ImageWrapper = styled.div`
  padding: 1em;
`;

const DescWrapper = styled.div`
  padding: 1em;
  background-color: #f7f7fa;
`;

const DeviceImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 250px;
`;

const DevicesList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export default Devices;
