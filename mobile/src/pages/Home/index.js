import React, { useEffect, useState } from 'react';

import { Container, Title, Header, ImageLogo, Empty, List } from './styles';
import Tomato from '../../assets/tomato_mini.png';
import Menu from '../../components/Menu';
import Loading from '../../components/Loading';
import CardTask from '../../components/CardTask';
import Timer from '../../components/Timer';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';

function HeaderHome() {
  return (
    <Header>
      <Title>Tasks</Title>
      <ImageLogo source={Tomato} />
    </Header>
  );
}

function Home({
  navigation,
  tasks,
  getPomodorosRequest,
  loading,
  setActiveTask,
}) {
  const [openPlay, setOpenPlay] = useState(false);

  const handleClose = () => setOpenAdd(false);

  useEffect(() => {
    async function getTasks() {
      const token = await AsyncStorage.getItem('token');
      try {
        await getPomodorosRequest(token);
      } catch (e) {
        navigation.navigate('Login');
      }
    }
    getTasks();
  }, []);

  const handleClosePlay = () => setOpenPlay(false);
  const handlePlay = task => {
    setOpenPlay(true);
    setActiveTask(task);
  };

  return (
    <>
      <Container>
        {tasks.length === 0 || tasks[0].title === null ? (
          <Empty>
            You have no tasks yet, add one by clicking the add button.
          </Empty>
        ) : (
          <List
            ListHeaderComponent={HeaderHome}
            data={tasks}
            renderItem={({ item }) => (
              <CardTask
                title={item.title}
                pomodoro={item}
                pomodoros={`${item.finishedPomodoros}/${item.qtdPomodoros}`}
                pomodoroId={item._id}
                handlePlay={handlePlay}
              />
            )}
            keyExtractor={item => item._id}
          />
        )}
        <Menu />
      </Container>
      {loading ? <Loading /> : null}
      <Timer openPlay={openPlay} handleClosePlay={handleClosePlay} />
    </>
  );
}

const mapStateToProps = state => ({
  tasks: state.pomodoro.tasks,
  loading: state.pomodoro.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
