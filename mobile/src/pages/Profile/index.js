import React, { useState } from 'react';
import Tomato from '../../assets/tomato.png';
import {
  Container,
  Logo,
  Body,
  Title,
  FormTitle,
  HeaderContainer,
  Input,
  Button,
  ButtonText,
  FormContainer,
} from './styles';
import Colors from '../../styles/colors';
import Menu from '../../components/Menu';
import http from '../../services/http';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';

function Profile({ navigation, name }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    try {
      await http.put(
        '/users',
        { currentPassword, newPassword },
        {
          headers: {
            token: token,
          },
        }
      );
      setNewPassword('');
      setCurrentPassword('');
      setLoading(false);
      ToastAndroid.show('Password changed with success', ToastAndroid.LONG);
    } catch (e) {
      setLoading(false);
      if (e.response)
        ToastAndroid.show(e.response.data.error, ToastAndroid.LONG);
      else
        ToastAndroid.show(
          'Unexpected error has occurred. please try again later.',
          ToastAndroid.LONG
        );
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo source={Tomato} />
        <Title>Hello, {name}</Title>
      </HeaderContainer>
      <Body>
        <FormTitle>Change your password</FormTitle>
        <FormContainer>
          <Input
            placeholder="Your current password"
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
            secureTextEntry={true}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <Input
            placeholder="Your new password"
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Button onPress={handleChangePassword}>
            <ButtonText>Change password</ButtonText>
          </Button>
        </FormContainer>
      </Body>
      <Menu />
      {loading && <Loading />}
    </Container>
  );
}

const mapStateToProps = state => ({
  name: state.pomodoro.name,
});

export default connect(
  mapStateToProps,
  null
)(Profile);
