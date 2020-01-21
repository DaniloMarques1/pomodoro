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
import http from '../../services/http';
import Colors from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';

function AddPomodoro({ openAdd, handleClose }) {
  const [title, setTitle] = useState('');
  const [qtd, setQtd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await http.post(
        'tasks',
        {
          title,
          qtdPomodoros: qtd,
        },
        {
          headers: {
            token,
          },
        }
      );
      setLoading(false);
    } catch (e) {}
  };

  if (!openAdd) return null;
  return (
    <Container>
      <ContentContainer>
        <Header>
          <Title>Create a new Pomodoro</Title>
          <CloseButton onPress={handleClose}>
            <CloseButtonText onClick={handleClose}>X</CloseButtonText>
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

export default AddPomodoro;
