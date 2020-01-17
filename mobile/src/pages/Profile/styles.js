import styled from 'styled-components/native';
import Colors from '../../styles/colors';
export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primaryColor};
  justify-content: center;
`;
export const HeaderContainer = styled.View`
  margin-top: 50px;
  align-items: center;
`;
export const Body = styled.View`
  background-color: ${Colors.whiteColor};
  height: 300px;
  border-radius: 15px;
  margin: 20px 30px;
  padding: 20px;
`;
export const Logo = styled.Image``;

export const Title = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const FormContainer = styled.View`
  margin-top: 40px;
`;

export const FormTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.secondaryColor};
  text-align: center;
`;

export const Input = styled.TextInput`
  align-self: stretch;
  border-radius: 10px;
  padding: 8px;
  height: 46px;
  border: 2px solid ${Colors.primaryColor};
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${Colors.primaryColor};
  align-self: stretch;
  margin-top: 20px;
  padding: 6px;
  border-radius: 10px;
  height: 46px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.whiteColor};
  align-self: center;
  font-size: 20px;
`;
