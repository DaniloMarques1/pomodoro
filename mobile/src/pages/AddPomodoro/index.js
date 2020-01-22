import React, { useState } from 'react';

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

function AddPomodoro({ openAdd, handleClose, addPomodoroRequest, token }) {
  const [title, setTitle] = useState('');
  const [qtd, setQtd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    async function addPomodoro() {
      if (!(title && qtd))
        ToastAndroid.show('Fill all fields', ToastAndroid.LONG);
      else {
        setLoading(true);
        await addPomodoroRequest(title, qtd, token);
        setTitle('');
        setQtd('');
        setLoading(false);
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
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
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
      {loading && <Loading />}
    </Container>
  );
}
const mapStateToProps = state => ({
  token: state.auth.token,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddPomodoro);
