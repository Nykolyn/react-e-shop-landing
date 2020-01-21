import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../assets/background-image.png';

const Background = () => <BackgroundImage imgUrl={backgroundImg} />;

const BackgroundImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Background;
