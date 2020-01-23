import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import Slider from 'react-slick';

import PackagesItem from './PackagesItem';
import { packagesSelector } from '../../redux/packages/selectors';

const IconButton = styled(Button)`
  position: absolute;
  background-color: #54b8e9;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
  &:focus {
    background-color: #54b8e9;
    color: #fff;
  }
  &:hover {
    background-color: #54b8e9;
    color: #fff;
  }
`;

const LeftIconButton = styled(IconButton)`
  left: -4%;
`;

const RightIconButton = styled(IconButton)`
  right: -4%;
`;

const PrevArrow = ({ onClick }) => (
  <LeftIconButton onClick={onClick} shape="circle" icon="left" />
);
const NextArrow = ({ onClick = () => null }) => (
  <RightIconButton onClick={onClick} shape="circle" icon="right" />
);

PrevArrow.defaultProps = {
  onClick: () => null,
};

NextArrow.defaultProps = {
  onClick: () => null,
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

const sliderSettings = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const PackagesSlider = ({ packages }) => (
  <Slider {...sliderSettings}>
    {packages.length > 0 &&
      packages.map(pack => <PackagesItem key={pack.id} {...pack} />)}
  </Slider>
);

PackagesSlider.defaultProps = {
  packages: [],
};

PackagesSlider.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mSTP = state => ({
  packages: packagesSelector(state),
});

export default connect(mSTP)(PackagesSlider);
