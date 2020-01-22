import React, { useEffect, useState } from 'react';

import { Container, Title, Header, ImageLogo, Empty, List } from './styles';
import Tomato from '../../assets/tomato_mini.png';
import Menu from '../../components/Menu';
import Loading from '../../components/Loading';
import CardTask from '../../components/CardTask';
import AddPomodoro from '../AddPomodoro';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PomodoroActions from '../../store/modules/pomodoro/action';

function Home({ navigation, tasks, getPomodorosRequest, loading, token }) {
  const [openAdd, setOpenAdd] = useState(false);

  const handleClose = () => setOpenAdd(false);
  const handleOpen = () => setOpenAdd(true);

  useEffect(() => {
    async function getTasks() {
      try {
        await getPomodorosRequest(token);
      } catch (e) {
        navigation.navigate('Login');
      }
    }
    getTasks();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <Title>Tasks</Title>
          <ImageLogo source={Tomato} />
        </Header>
        {tasks.length === 0 || tasks[0].title === null ? (
          <Empty>
            You have no tasks yet, add one by clicking the add button.
          </Empty>
        ) : (
          <List
            data={tasks}
            renderItem={({ item }) => (
              <CardTask
                title={item.title}
                pomodoros={`${item.finishedPomodoros}/${item.qtdPomodoros}`}
                pomodoroId={item._id}
              />
            )}
            keyExtractor={item => item._id}
          />
        )}
        <Menu handleOpen={handleOpen} />
      </Container>
      {loading ? <Loading /> : null}
      <AddPomodoro openAdd={openAdd} handleClose={handleClose} />
    </>
  );
}

const mapStateToProps = state => ({
  tasks: state.pomodoro.tasks,
  loading: state.pomodoro.loading,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PomodoroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
