import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import { Container, MenuContainer, MenuScroll, MenuButton } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default function Menu({ handleLogout }) {
  return (
    <Container>
      <MenuContainer>
        <MenuScroll>
          <MenuButton>
            <MenuItem active={true} text={'Home'} icon="home" />
          </MenuButton>
          <MenuButton>
            <MenuItem text={'Profile'} icon="person" />
          </MenuButton>
          <MenuButton>
            <MenuItem text={'Add'} icon="control-point" />
          </MenuButton>
          <MenuButton onPress={handleLogout}>
            <MenuItem text={'Log out'} icon="exit-to-app" />
          </MenuButton>
        </MenuScroll>
      </MenuContainer>
    </Container>
  );
}
