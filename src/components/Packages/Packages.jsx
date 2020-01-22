import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Button, Typography, Icon } from 'antd';
// import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// import appleIcon from '../../assets/icons/brands-and-logotypes.svg';
// import SamsungIcon from '../../assets/icons/samsung.svg';
// import HuaweiIcon from '../../assets/icons/huawei.svg';
// import OneplusIcon from '../../assets/icons/one-plus.svg';
import {
  packagesSelector,
  loadingSelector,
} from '../../redux/packages/selectors';
import { getPackages } from '../../redux/packages/actions';
import Box from '../shared/Box';
import Container from '../Container';

const { Text } = Typography;

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

const ButtonGroup = Button.Group;
const sliderSettings = {
  infinite: true,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const CardBenefitWrapper = styled(Box)`
  border-bottom: 1px solid #b2b3b8;
  padding: 1em;
`;

const BenefitIcon = styled(Icon)`
  margin-right: 1em;
`;

const CardBenefit = ({ text }) => (
  <CardBenefitWrapper display="flex" alignItems="center">
    <BenefitIcon type="check" />
    <Text>{text}</Text>
  </CardBenefitWrapper>
);

CardBenefit.propTypes = {
  text: PropTypes.string.isRequired,
};

const Packages = ({ packages, getPackages }) => {
  useEffect(() => {
    getPackages();
  }, [getPackages]);
  return (
    <Container width="80%">
      <Title fontWeigth={700}>Go Packages</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet
        beatae alias ducimus molestias quo doloribus, odit, fugiat dolor minima
        dignissimos magni quos, earum optio recusandae sed maiores esse
        accusamus? Natus sint sed officiis, voluptatem itaque autem tempora esse
        tempore omnis ipsa totam rerum deleniti repellat distinctio impedit ut,
        quas aliquam officia perspiciatis similique perferendis assumenda! Est
        quae voluptatibus temporibus.
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
        dignissimos magni quos, earum optio recusandae sed maiores esse
        accusamus? Natus sint sed officiis, voluptatem itaque autem tempora esse
        tempore omnis ipsa totam rerum deleniti repellat distinctio impedit ut,
        quas aliquam officia perspiciatis similique perferendis assumenda! Est
        quae voluptatibus temporibus.
      </Description>
      <Box mb="2em">
        <Slider {...sliderSettings}>
          {packages.length > 0 &&
            packages.map(pack => (
              <StyledCard hoverable bordered={false} key={pack.id}>
                <CardTitleBox>
                  <Title align="center" color="#fff" fontSize="20px" mb="4px">
                    {pack.description}
                  </Title>
                  <Title align="center" color="#fff" fontSize="20px" mb="0px">
                    {pack.monthly_plan}
                  </Title>
                </CardTitleBox>
                <CardBody>
                  {pack.other_benefits && (
                    <CardBenefit text={pack.other_benefits} />
                  )}
                  {pack.other_benefits_1 && (
                    <CardBenefit text={pack.other_benefits_1} />
                  )}
                  {pack.other_benefits_2 && (
                    <CardBenefit text={pack.other_benefits_2} />
                  )}
                  {pack.other_benefits_3 && (
                    <CardBenefit text={pack.other_benefits_3} />
                  )}
                  {pack.other_benefits_4 && (
                    <CardBenefit text={pack.other_benefits_4} />
                  )}
                </CardBody>
                <Box>
                  <Box display="flex" justifyContent="space-around" mb="1em">
                    <StyledButton>Plan only</StyledButton>
                    <StyledButton>With Device</StyledButton>
                  </Box>
                  <CardDetailsText>See all benefit details</CardDetailsText>
                </Box>
              </StyledCard>
            ))}
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
};

const StyledCard = styled.div`
  height: 500px;
  padding: 1em;
`;

const CardDetailsText = styled.p`
  margin: 0;
  color: #54b8e9;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
`;

const CardBody = styled.div`
  height: calc(500px - 80px - 100px);
  overflow: auto;
`;

const CardTitleBox = styled(Box)`
  border-radius: 20px 20px 0 0;
  background-color: #54b8e9;
  text-align: center;
  height: 80px;
  padding: 1em;
`;

const IconsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 3em;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ color }) => color || '#000'};
  margin-bottom: ${({ mb }) => mb || '20px'};
  text-align: ${({ align }) => align || 'left'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  font-weight: ${({ fontWeigth }) => fontWeigth || 500};
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

Packages.defaultProps = {
  packages: [],
};

Packages.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.object.isRequired),
  getPackages: PropTypes.func.isRequired,
};

const mSTP = state => ({
  packages: packagesSelector(state),
  loading: loadingSelector(state),
});

const mDTP = {
  getPackages,
};

export default connect(mSTP, mDTP)(Packages);
