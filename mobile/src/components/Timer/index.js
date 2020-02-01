import React, { useState, useEffect } from 'react';

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
  PlayPauseButton,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';

const DEFAULT_TIMER = { minute: 25, second: 0 };

function Timer({ task, openPlay, handleClosePlay, updatePomodoroRequest }) {
  const [time, setTime] = useState(DEFAULT_TIMER);
  const [iconName, setIconName] = useState('play-arrow');
  const [clockRunning, setClockRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function updateTask() {
      const token = await AsyncStorage.getItem('token');
      console.log('update', { token });
      await updatePomodoroRequest(task.pomodoroId, token);
    }

    if (finished) {
      setFinished(false);
      updateTask();
    }
  }, [finished]);

  useEffect(() => {
    if (clockRunning) {
      if (time.minute !== 0 || time.second !== 0) {
        const intervalId = setInterval(() => {
          setTime(prevState => ({
            minute:
              prevState.second === 0 ? prevState.minute - 1 : prevState.minute,
            second: prevState.second === 0 ? 59 : prevState.second - 1,
          }));
        }, 1000);
        return () => clearInterval(intervalId);
      } else {
        setFinished(true);
        setClockRunning(false);
        setTime(DEFAULT_TIMER);
        setIconName('play-arrow');
        handleClosePlay();
      }
    }
  }, [clockRunning, time]);

  const handleClose = () => {
    setTime(DEFAULT_TIMER);
    handleClosePlay();
  };

  if (!openPlay) return null;

  const formatTime = () =>
    `${time.minute
      .toString()
      .padStart('2', '0')}:${time.second.toString().padStart('2', '0')}`;

  const handleStartTimer = () => {
    //demora pra atualizar ou seja, mesmo ja clicado na linha 34 ainda sera false, devemos forcar
    setClockRunning(!clockRunning);
    if (!clockRunning) setIconName('pause');
    else setIconName('play-arrow');
  };

  return (
    <Container>
      <TimerContainer>
        <Header>
          <CloseButton onPress={handleClose}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <TaskTitle numberOfLines={2}>{task.title}</TaskTitle>
          <PomodorosQtd>{task.pomodoros}</PomodorosQtd>
        </Header>
        <Body>
          <Time>{formatTime()}</Time>
          <PlayPauseButton onPress={handleStartTimer}>
            <Icon name={iconName} size={40} color={Colors.primaryColor} />
          </PlayPauseButton>
        </Body>
      </TimerContainer>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Timer);
