import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  ContentContainer,
  Header,
  Body,
  Button,
  ButtonText,
  Input,
  CloseButton,
  CloseButtonText,
} from './styles';
import Loading from '../../components/Loading';
import Colors from '../../styles/colors';
import * as PomodoroActions from '../../store/modules/pomodoro/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function AddPomodoro({ openAdd, handleClose, addPomodoroRequest }) {
  const [title, setTitle] = useState('');
  const [qtd, setQtd] = useState('');

  const handleCreate = async () => {
    async function addPomodoro() {
      const token = await AsyncStorage.getItem('token');
      if (!(title && qtd))
        ToastAndroid.show('Fill all fields', ToastAndroid.LONG);
      else {
        await addPomodoroRequest(title, qtd, token);
        setTitle('');
        setQtd('');
        handleClose();
      }
    }
    addPomodoro();
  };

  if (!openAdd) return null;
  return (
    <Container>
      <ContentContainer>
        <Header>
          <Title>Create a new Pomodoro</Title>
          <CloseButton onPress={handleClose}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
        </Header>
        <Body>
          <Input
            placeholder="Task title"
            autoFocus={true}
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
            maxLength={50}
            value={title}
            onChangeText={setTitle}
          />
          <Input
            placeholder="Number of pomodoros"
            placeholderTextColor={Colors.grayColor}
            keyboardType="numeric"
            value={qtd}
            onChangeText={setQtd}
          />
          <Button onPress={handleCreate}>
            <ButtonText>Create</ButtonText>
          </Button>
        </Body>
      </ContentContainer>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddPomodoro);
