import React from 'react';
import { Typography, Button } from 'antd';
import styled from 'styled-components';
import Box from '../shared/Box';
import Container from '../Container';

const { Title, Text } = Typography;

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
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Title level={2}>ZAIN</Title>
          <Box mb="1em">
            <a href="#">
              <Text>Terms</Text>
            </a>

            <a href="#">
              <Text>Policy</Text>
            </a>

            <a href="#">
              <Text>Contact</Text>
            </a>
          </Box>
          <Text>Copyright @ 2019 Zain Jordan</Text>
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
  margin-right: 1em;
  margin-bottom: 0.2em;
`;

export default Footer;
