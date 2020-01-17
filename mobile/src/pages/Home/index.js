import React, { useEffect, useState } from 'react';

import { Container, Title, Header, ImageLogo, Empty, List } from './styles';
import Tomato from '../../assets/tomato_mini.png';
import Menu from '../../components/Menu';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
import http from '../../services/http';
import CardTask from '../../components/CardTask';

export default function Home({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyTasksMessage, setEmptyTasksMessage] = useState('');
  useEffect(() => {
    setLoading(true);
    async function getTasks() {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await http.get('/tasks', {
          headers: {
            token: token,
          },
        });
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
        if (tasks.length === 0)
          setEmptyTasksMessage(
            'You have no tasks, add one by clicking the add button'
          );
        setLoading(false);
      } catch (e) {
        setLoading(false);
        await AsyncStorage.removeItem('token');
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
        {tasks.length === 0 ? (
          <Empty>{emptyTasksMessage}</Empty>
        ) : (
          <List
            data={tasks}
            renderItem={({ item }) => (
              <CardTask
                title={item.title}
                pomodoros={`${item.finishedPomodoros}/${item.qtdPomodoros}`}
              />
            )}
            keyExtractor={item => item._id}
          />
        )}
        <Menu />
      </Container>
      {loading && <Loading />}
    </>
  );
}
