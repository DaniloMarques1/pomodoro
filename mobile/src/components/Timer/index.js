import React, { useEffect } from 'react';

import {
  Container,
  TimerContainer,
  Header,
  CloseButton,
  CloseButtonText,
  TaskTitle,
  PomodorosQtd,
  Body,
  Time,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';

export default function Timer({ task, openPlay, handleClosePlay }) {
  if (!openPlay) return null;

  return (
    <Container>
      <TimerContainer>
        <Header>
          <CloseButton onPress={handleClosePlay}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <TaskTitle numberOfLines={2}>{task.title}</TaskTitle>
          <PomodorosQtd>{task.pomodoros}</PomodorosQtd>
        </Header>
        <Body>
          <Time>23:32</Time>
          <Icon name="pause" size={30} color={Colors.primaryColor} />
        </Body>
      </TimerContainer>
    </Container>
  );
}
