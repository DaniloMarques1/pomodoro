import React, { useState, useEffect } from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

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
  IconContainer,
  ResetButton,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';
import { ToastAndroid } from 'react-native';
const DEFAULT_TIMER = { minute: 2, second: 0 };
const DEFAULT_BREAK = { minute: 1, second: 0 };

function Timer({
  openPlay,
  handleClosePlay,
  updatePomodoroRequest,
  activeTask,
}) {
  const [time, setTime] = useState(DEFAULT_TIMER); // representa o timer/break do cronometro.
  const [iconName, setIconName] = useState('play-arrow');
  const [clockRunning, setClockRunning] = useState(false); // indica se o cronometro esta sendo percorrido. UseEffect sera chamado sempre que essa variavel mudar
  const [finished, setFinished] = useState(false); // indica se a task foi finalizada
  const [breakTime, setBreakTime] = useState(false); // controla se o time deve ser o de break ou nao

  useEffect(() => {
    async function updateTask() {
      // caso o cronometro que finalizou tenha sido o o de break, nao atualizar
      // breakTime === true indica que acabou um pomodoro
      if (breakTime) {
        const token = await AsyncStorage.getItem('token');
        await updatePomodoroRequest(activeTask._id, token);
      }
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
        }, 10);
        return () => clearInterval(intervalId);
      } else {
        playAudio();
        setFinished(true);
        setClockRunning(false);
        //  breakTime === false indica que estavamos tendo um pomodoro
        setTime(!breakTime ? DEFAULT_BREAK : DEFAULT_TIMER);
        //atualizacao assincrona
        setBreakTime(!breakTime);
        setIconName('play-arrow');
      }
    }
  }, [clockRunning, time]);

  const formatTime = () =>
    `${time.minute
      .toString()
      .padStart('2', '0')}:${time.second.toString().padStart('2', '0')}`;

  const handleStartTimer = () => {
    if (activeTask.active === true || breakTime) {
      setClockRunning(!clockRunning);
      if (!clockRunning) setIconName('pause');
      else setIconName('play-arrow');
    } else {
      ToastAndroid.show('The task was already completed', ToastAndroid.LONG);
    }
  };

  function handleReset() {
    console.log('opa');
    // vai parar o cronometro e resetar o time
    setClockRunning(false);
    breakTime ? setTime(DEFAULT_BREAK) : setTime(DEFAULT_TIMER);
    setIconName('play-arrow');
  }
  function playAudio() {
    const alarm = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, err => {
      if (err) console.log('failed to load the audio: ', err);
      alarm.play();
    });
  }
  if (!openPlay) return null;

  return (
    <Container>
      <TimerContainer>
        <Header>
          <CloseButton onPress={handleClosePlay}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
          <TaskTitle numberOfLines={2}>{activeTask.title}</TaskTitle>
          <PomodorosQtd>
            {activeTask.finishedPomodoros}/{activeTask.qtdPomodoros}
          </PomodorosQtd>
        </Header>
        <Body>
          <Time>{formatTime()}</Time>
          <IconContainer>
            <PlayPauseButton onPress={handleStartTimer}>
              <Icon name={iconName} size={35} color={Colors.primaryColor} />
            </PlayPauseButton>
            <ResetButton onPress={handleReset}>
              <Icon
                name="settings-backup-restore"
                size={35}
                color={Colors.primaryColor}
              />
            </ResetButton>
          </IconContainer>
        </Body>
      </TimerContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  activeTask: state.pomodoro.activeTask,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
