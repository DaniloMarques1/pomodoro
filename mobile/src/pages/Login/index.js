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
import { connect } from 'react-redux';
import * as SignActions from '../../store/modules/auth/action';
import { bindActionCreators } from 'redux';

function Login({ navigation, signInRequest, loading }) {
  const tEmail = navigation.getParam('email');
  const [email, setEmail] = useState(tEmail ? tEmail : '');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await signInRequest(email, password);
      navigation.navigate('Home');
    } catch (e) {}
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

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
