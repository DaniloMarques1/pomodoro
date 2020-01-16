import React from 'react';

import { Container, Title, Header, ImageLogo } from './styles';
import Tomato from '../../assets/tomato_mini.png';
import Menu from '../../components/Menu';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
export default function Home({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };
  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
        <ImageLogo source={Tomato} />
      </Header>
      <Menu handleLogout={handleLogout} />
      <Loading open={true} />
    </Container>
  );
}
