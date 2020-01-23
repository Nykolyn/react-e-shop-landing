import React from 'react';
import styled from 'styled-components';

import DevicesItem from './DevicesItem';

// Mock devices template
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
    const device = {
      ...deviceSample,
      id: i,
    };
    devicesArr.push(device);
  }
};
drawDevices();

const DevicesList = () => (
  <List>
    {devicesArr.map(device => (
      <DevicesItem key={device.id} {...device} />
    ))}
  </List>
);

const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export default DevicesList;
