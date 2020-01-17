import React from 'react';
import Tomato from '../../assets/tomato.png';
import {
  Container,
  Logo,
  Body,
  Title,
  FormTitle,
  HeaderContainer,
  Input,
  Button,
  ButtonText,
  FormContainer,
} from './styles';
import Colors from '../../styles/colors';
import Menu from '../../components/Menu';
export default function Profile({ navigation }) {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={Tomato} />
        <Title>Hello, Danilo</Title>
      </HeaderContainer>
      <Body>
        <FormTitle>Change your password</FormTitle>
        <FormContainer>
          <Input
            placeholder="Your current password"
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
            secureTextEntry={true}
          />
          <Input
            placeholder="Your new password"
            autoCapitalize="none"
            placeholderTextColor={Colors.grayColor}
            secureTextEntry={true}
          />
          <Button>
            <ButtonText>Change password</ButtonText>
          </Button>
        </FormContainer>
      </Body>
      <Menu />
    </Container>
  );
}
