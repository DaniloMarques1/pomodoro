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

const DEFAULT_TIMER = { minute: 2, second: 0 };

export default function Timer({ task, openPlay, handleClosePlay }) {
  const [time, setTime] = useState(DEFAULT_TIMER);
  const [iconName, setIconName] = useState('play-arrow');
  const [clockRunning, setClockRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) {
      setFinished(false);
      //TODO: request to update task
      console.log('finished');
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
        }, 100);
        return () => clearInterval(intervalId);
      } else {
        setFinished(true);
        setClockRunning(false);
        setTime(DEFAULT_TIMER);
        handleClosePlay();
        setIconName('play-arrow');
      }
    }
  }, [clockRunning, time]);

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
          <CloseButton onPress={handleClosePlay}>
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
