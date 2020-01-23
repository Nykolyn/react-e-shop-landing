import React from 'react';
import { Typography, Button } from 'antd';
import styled from 'styled-components';

import Box from '../shared/Box';
import Container from '../Container';
import footerLogo from '../../assets/footer-logo.png';
import COLORS, { boxShadow, boxShadowHover } from '../../styles/COLORS';

const { Text } = Typography;

const socials = [
  'facebook',
  'google',
  'instagram',
  'linkedin',
  'twitter',
  'youtube',
  'github',
  'gitlab',
];

const Footer = () => (
  <Foter>
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <FooterLogo src={footerLogo} alt="Zain logo" />
          <VerticalLineList>
            <VerticalLineItem>
              <StyledText>Terms</StyledText>
            </VerticalLineItem>
            <VerticalLineItem>
              <StyledText>Policy</StyledText>
            </VerticalLineItem>
            <VerticalLineItem>
              <StyledText>Contact</StyledText>
            </VerticalLineItem>
          </VerticalLineList>
          <Text>Copyright © 2019 Zain Jordan</Text>
        </Box>
        <Box>
          <Text>Social Media</Text>
          <IconsWrapper>
            {socials.map(social => (
              <StyledIconButton shape="circle" key={social} icon={social} />
            ))}
          </IconsWrapper>
        </Box>
      </Box>
    </Container>
  </Foter>
);

const VerticalLineList = styled.ul`
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;
`;

const VerticalLineItem = styled.li`
  position: relative;
  &:nth-last-child(n + 2) ::after {
    content: '';
    width: 1px;
    background-color: #aba6a6;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
    height: 16px;
    position: absolute;
  }
`;

const StyledText = styled(Text)`
  cursor: pointer;
  position: relative;
  font-size: 16px;
  transition: all 0.2s;
  &:hover {
    color: ${COLORS.MAIN_BLUE_COLOR};
  }
`;

const FooterLogo = styled.img`
  height: 30px;
  cursor: pointer;
  margin-bottom: 1em;
`;

const Foter = styled.footer`
  padding: 1em 0;
  background-color: #f7f7fa;
`;

const IconsWrapper = styled(Box)`
  padding-top: 1em;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
`;

const StyledIconButton = styled(Button)`
  background-color: #f1f1f1;
  border-color: transparent;
  margin-right: 1em;
  box-shadow: ${boxShadow};
  margin-bottom: 0.4em;
  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.MAIN_BLUE_COLOR};
    box-shadow: ${boxShadowHover};
  }
`;

export default Footer;
