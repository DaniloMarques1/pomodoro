import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors';
import {
  Container,
  Header,
  Title,
  Body,
  Pomodoros,
  TitleView,
  PomodorosView,
  IconButton,
} from './styles';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';
import { bindActionCreators } from 'redux';

function CardTask({ pomodoroId, title, pomodoros, deletePomodoroRequest }) {
  const handleDelete = () => {
    Alert.alert('Delete task...', 'You want to delete the task?', [
      null,
      { text: 'Cancel', onPress: () => null, style: 'cancel' },
      { text: 'Ok', onPress: () => deleTask() },
    ]);
  };

  async function deleTask() {
    await deletePomodoroRequest(pomodoroId);
  }

  return (
    <>
      <Container>
        <Header>
          <TitleView>
            <Title>{title}</Title>
          </TitleView>
          <PomodorosView>
            <Pomodoros>{pomodoros}</Pomodoros>
          </PomodorosView>
        </Header>
        <Body>
          <IconButton>
            <Icon name="play-arrow" size={30} color={Colors.primaryColor} />
          </IconButton>
          <IconButton onPress={handleDelete}>
            <Icon name="delete" size={25} color={Colors.primaryColor} />
          </IconButton>
        </Body>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.pomodoro.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardTask);
