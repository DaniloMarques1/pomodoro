import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import { Container, MenuContainer, MenuScroll, MenuButton } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';
import { bindActionCreators } from 'redux';

function Menu({ navigation, handleOpen, signOut }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    signOut();
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
            <MenuButton onPress={() => navigation.navigate('AddPomodoro')}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(Menu));
