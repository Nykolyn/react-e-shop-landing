import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../assets/background-image.png';

const Background = () => <BackgroundImage src={backgroundImg} />;

const BackgroundImage = styled.img`
  display: 'block';
  margin-bottom: 2em;
  width: 100%;
`;

export default Background;
