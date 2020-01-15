import React, { useState, useEffect } from 'react';
import Tomato from '../../assets/tomato.png';
import {
  Container,
  ImageLogo,
  Input,
  TextView,
  BoldTextView,
  Button,
  ButtonText,
  SignUpButton,
} from './styles';
import Colors from '../../styles/colors';
import http from '../../services/http';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({ navigation }) {
  const tEmail = navigation.getParam('email');
  const [email, setEmail] = useState(tEmail ? tEmail : '');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   async function checkToken() {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token) navigation.navigate('Home');
  //   }
  //   checkToken();
  // }, []);

  const handleSubmit = async () => {
    const response = await http.post('/session', {
      email,
      password,
    });
    await AsyncStorage.setItem('token', response.data.token);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <ImageLogo source={Tomato} />
      <Input
        placeholder="Your email"
        autoCapitalize="none"
        placeholderTextColor={Colors.grayColor}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Your password"
        autoCapitalize="none"
        placeholderTextColor={Colors.grayColor}
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Login</ButtonText>
      </Button>

      <SignUpButton onPress={() => navigation.navigate('Registration')}>
        <TextView>
          Don't have an account? <BoldTextView>Sign up!</BoldTextView>
        </TextView>
      </SignUpButton>
    </Container>
  );
}
