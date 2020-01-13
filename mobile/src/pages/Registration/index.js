import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import {
  Container,
  ImageLogo,
  Input,
  Button,
  ButtonText,
  TextView,
  BoldTextView,
  SignInButton,
} from './styles';
import Tomato from '../../assets/tomato.png';
import Colors from '../../styles/colors';

export default function Registration({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = values => {
    if (!(name && email, password, confirmPassword))
      setErrorMessage('Fill in all fields');
    if (password !== confirmPassword)
      setErrorMessage('Password does not match');
  };

  return (
    <Container>
      {!!errorMessage && ToastAndroid.show(errorMessage, ToastAndroid.SHORT)}
      <ImageLogo source={Tomato} />
      <Input
        placeholder="Your name"
        placeholderTextColor={Colors.grayColor}
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Your email"
        placeholderTextColor={Colors.grayColor}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Your password"
        placeholderTextColor={Colors.grayColor}
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Confirm password"
        placeholderTextColor={Colors.grayColor}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Sign up</ButtonText>
      </Button>

      <SignInButton onPress={() => navigation.navigate('Login')}>
        <TextView>
          Already have an account? <BoldTextView>Sign in!</BoldTextView>
        </TextView>
      </SignInButton>
    </Container>
  );
}
