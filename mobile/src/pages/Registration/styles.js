import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  margin: 0 20px;
`;

export const ImageLogo = styled.Image`
  margin-bottom: 30px;
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
  font-size: 24px;
`;
export const TextView = styled.Text`
  color: ${Colors.secondaryColor};
  margin-top: 20px;
  font-size: 16px;
`;

export const BoldTextView = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.secondaryColor};
`;

export const SignInButton = styled.TouchableOpacity``;
