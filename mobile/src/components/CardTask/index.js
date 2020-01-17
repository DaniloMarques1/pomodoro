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

export default function CardTask({ title, pomodoros }) {
  useEffect(() => {
    console.log(title, pomodoros);
  }, []);

  return (
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
        <IconButton>
          <Icon name="delete" size={25} color={Colors.primaryColor} />
        </IconButton>
      </Body>
    </Container>
  );
}
