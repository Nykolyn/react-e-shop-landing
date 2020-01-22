import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

// import Box from '../shared/Box';
import Container from '../Container';

const ButtonGroup = Button.Group;

const Packages = () => (
  <Container width="80%">
    <Title>Go Packages</Title>
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
  </Container>
);

const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
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

export default Packages;
