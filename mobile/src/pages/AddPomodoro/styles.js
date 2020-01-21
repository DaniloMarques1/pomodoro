import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

export const ContentContainer = styled.View`
  margin: 0 20px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Body = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${Colors.secondaryColor};
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
  margin-top: 10px;
  padding: 6px;
  border-radius: 10px;
  height: 46px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  align-self: center;
  color: #fff;
  font-size: 18px;
  margin-top: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const CloseButtonText = styled.Text`
  color: ${Colors.grayColor};
  font-size: 16px;
  align-self: flex-end;
  font-weight: bold;
`;
