import React from 'react';

import { Container, Title, Header, ImageLogo } from './styles';
import Tomato from '../../assets/tomato_mini.png';
export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
        <ImageLogo source={Tomato} />
      </Header>
    </Container>
  );
}
