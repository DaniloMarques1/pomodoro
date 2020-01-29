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
import Loading from '../../components/Loading';
import { ToastAndroid } from 'react-native';
import http from '../../services/http';
import AsyncStorage from '@react-native-community/async-storage';

function Login({ navigation }) {
  const tEmail = navigation.getParam('email') || 'arthur@gmail.com';
  const [email, setEmail] = useState(tEmail ? tEmail : '');
  const [password, setPassword] = useState('arthur');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await http.post('/session', {
        email,
        password,
      });
      setLoading(false);
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');
    } catch (e) {
      setLoading(false);
      if (e.response)
        ToastAndroid.show(e.response.data.error, ToastAndroid.LONG);
      else
        ToastAndroid.show(
          'An error has occurred. Check your internet connection and try again',
          ToastAndroid.LONG
        );
    }
  };

  return (
    <>
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
      {loading && <Loading />}
    </>
  );
}
export default Login;
