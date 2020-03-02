import React, { useState } from 'react';

import {
  Container,
  HeaderContainer,
  Body,
  Logo,
  Title,
  FormContainer,
  Button,
  ButtonText,
  Input,
} from './styles';

import Tomato from '../../assets/tomato.png';
import Menu from '../../components/Menu';

import Loading from '../../components/Loading';
import Colors from '../../styles/colors';
import * as PomodoroActions from '../../store/modules/pomodoro/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function AddPomodoro({ addPomodoroRequest, loading }) {
  const [title, setTitle] = useState('');
  const [qtd, setQtd] = useState('');

  async function addPomodoro() {
    const token = await AsyncStorage.getItem('token');
    if (!(title && qtd))
      ToastAndroid.show('Fill all fields', ToastAndroid.LONG);
    else {
      await addPomodoroRequest(title, qtd, token);
      setTitle('');
      setQtd('');
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo source={Tomato} />
        <Title> Add a new Pomodoro</Title>
      </HeaderContainer>
      <Body>
        <FormContainer>
          <Input
            placeholder="Task title"
            placeholderTextColor={Colors.grayColor}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            placeholder="Task qtd"
            placeholderTextColor={Colors.grayColor}
            value={qtd}
            keyboardType="numeric"
            onChangeText={setQtd}
          />
          <Button onPress={addPomodoro}>
            <ButtonText>Create</ButtonText>
          </Button>
        </FormContainer>
      </Body>
      <Menu />
      {loading && <Loading />}
    </Container>
  );
}

const mapStateToProps = state => ({
  loading: state.pomodoro.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPomodoro);
