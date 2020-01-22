import React from 'react';
import Slider from 'react-slick';
import { Button, Card } from 'antd';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import appleIcon from '../../assets/icons/brands-and-logotypes.svg';
import SamsungIcon from '../../assets/icons/samsung.svg';
import HuaweiIcon from '../../assets/icons/huawei.svg';
import OneplusIcon from '../../assets/icons/one-plus.svg';
import Box from '../shared/Box';
import Container from '../Container';

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
const NextArrow = ({ onClick }) => (
  <RightIconButton onClick={onClick} shape="circle" icon="right" />
);

const ButtonGroup = Button.Group;
const sliderSettings = {
  infinite: true,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Packages = () => (
  <Container width="80%">
    <Title fontWeigth={700}>Go Packages</Title>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet
      beatae alias ducimus molestias quo doloribus, odit, fugiat dolor minima
      dignissimos magni quos, earum optio recusandae sed maiores esse accusamus?
      Natus sint sed officiis, voluptatem itaque autem tempora esse tempore
      omnis ipsa totam rerum deleniti repellat distinctio impedit ut, quas
      aliquam officia perspiciatis similique perferendis assumenda! Est quae
      voluptatibus temporibus.
    </Description>
    <StyledButtonGroup>
      <StyledButton>Go Postpaid Plans</StyledButton>
      <StyledButton>Go Family</StyledButton>
      <StyledButton>Go Governorates</StyledButton>
    </StyledButtonGroup>
    <Title>Go Postpaid Plans</Title>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet
      beatae alias ducimus molestias quo doloribus, odit, fugiat dolor minima
      dignissimos magni quos, earum optio recusandae sed maiores esse accusamus?
      Natus sint sed officiis, voluptatem itaque autem tempora esse tempore
      omnis ipsa totam rerum deleniti repellat distinctio impedit ut, quas
      aliquam officia perspiciatis similique perferendis assumenda! Est quae
      voluptatibus temporibus.
    </Description>
    <Box mb="2em">
      <Slider {...sliderSettings}>
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>{' '}
        <StyledCard title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </StyledCard>
      </Slider>
    </Box>
    <Title align="center">Eligible device for this plan:</Title>
    <IconsWrapper>
      <BrandIconButton>All</BrandIconButton>
      <BrandIconButton>All</BrandIconButton>
      <BrandIconButton>All</BrandIconButton>
      <BrandIconButton>All</BrandIconButton>
      <BrandIconButton>All</BrandIconButton>
    </IconsWrapper>
  </Container>
);

const IconsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 3em;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  text-align: ${({ align }) => align || 'left'};
  font-size: 30px;
  font-weight: ${props => (props.fontWeigth ? props.fontWeigth : 500)};
`;

const BrandIconButton = styled.button`
  border: 1px solid #666;
  margin-right: 10px;
  background-color: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 2em;
  width: 80%;
  line-height: 30px;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  display: block;
  padding-top: 2em;
  margin-bottom: 4em;
  text-align: center;
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #54b8e9;
    color: #fff;
  }
`;

const StyledCard = styled(Card)`
  padding: 20px;
`;

export default Packages;
