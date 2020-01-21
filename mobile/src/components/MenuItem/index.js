import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, MenuText } from './styles';
import Colors from '../../styles/colors';
export default function MenuItem({ text, icon, active }) {
  return (
    <Container>
      <Icon name={icon} size={22} color={Colors.primaryColor} />
      <MenuText>{text}</MenuText>
    </Container>
  );
}
