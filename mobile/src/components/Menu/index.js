import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import { Container, MenuContainer, MenuScroll, MenuButton } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

function Menu({ navigation, handleOpen }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  return (
    <>
      <Container>
        <MenuContainer>
          <MenuScroll>
            <MenuButton onPress={() => navigation.navigate('Home')}>
              <MenuItem active={true} text={'Home'} icon="home" />
            </MenuButton>
            <MenuButton onPress={() => navigation.navigate('Profile')}>
              <MenuItem text={'Profile'} icon="person" />
            </MenuButton>
            <MenuButton onPress={handleOpen}>
              <MenuItem text={'Add'} icon="control-point" />
            </MenuButton>
            <MenuButton onPress={handleLogout}>
              <MenuItem text={'Log out'} icon="exit-to-app" />
            </MenuButton>
          </MenuScroll>
        </MenuContainer>
      </Container>
    </>
  );
}

export default withNavigation(Menu);
