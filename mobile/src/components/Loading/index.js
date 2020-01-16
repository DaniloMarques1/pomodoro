import React from 'react';

import { Container, LoadingContainer } from './styles';
import { ActivityIndicator } from 'react-native';
import Colors from '../../styles/colors';
export default function Loading() {
  return (
    <Container>
      <LoadingContainer>
        <ActivityIndicator size={120} color={Colors.primaryColor} />
      </LoadingContainer>
    </Container>
  );
}
