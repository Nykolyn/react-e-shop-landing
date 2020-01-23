import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';

import Title from '../shared/Title';

const DevicesItem = ({ model, img, brand, price }) => (
  <DeviceListItem>
    <ImageWrapper>
      <DeviceImg src={img} alt={model} />
    </ImageWrapper>
    <DescWrapper>
      <Title mb="5px" fontSize="20px">
        {brand}
      </Title>
      <Title mb="10px" fontSize="20px" fontWeight={700}>
        {model}
      </Title>
      <Title mb="2px" fontSize="14px" fontWeight={700}>
        Start from:
      </Title>
      <Title mb="0px" color="#54b8e9" fontSize="14px" fontWeight={700}>
        {price}
      </Title>
    </DescWrapper>
    <IconsWrapper>
      <DeviceIcon type="shrink" />
      <DeviceIcon type="shopping-cart" />
    </IconsWrapper>
  </DeviceListItem>
);

const DeviceListItem = styled.li`
  width: 19%;
  position: relative;
  transition: all 0.4s;
  box-shadow: 0px 0px 5px 0px rgba(209, 209, 209, 1);
  border-radius: 20px;
  margin-right: 14px;
  margin-bottom: 2em;
  &:nth-child(5n) {
    margin-right: 0;
    transform: translateX(5px);
  }

  &:hover {
    box-shadow: 0px 0px 14px 0px rgba(209, 209, 209, 1);
  }
`;

const ImageWrapper = styled.div`
  padding: 1em;
`;

const DescWrapper = styled.div`
  padding: 1em;
  border-radius: 0 0 20px 20px;
  background-color: #f7f7fa;
`;

const DeviceImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 250px;
`;

const DeviceIcon = styled(Icon)`
  font-size: 20px;
  cursor: pointer;
`;

const IconsWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  width: 60px;
`;

DevicesItem.propTypes = {
  model: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default DevicesItem;
