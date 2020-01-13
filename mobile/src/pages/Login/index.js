import React, { useState } from 'react';
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <Container>
      <ImageLogo source={Tomato} />
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
