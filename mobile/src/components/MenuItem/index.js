import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, MenuButton, MenuText } from './styles';
import Colors from '../../styles/colors';
export default function MenuItem({ text, icon, active }) {
  return (
    <Container>
      <Icon name={icon} size={22} color={Colors.primaryColor} />
      <MenuText style={{ fontWeight: active ? 'bold' : 'normal' }}>
        {text}
      </MenuText>
    </Container>
  );
}
