import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`;

export const TimerContainer = styled.View`
  background-color: ${Colors.whiteColor};
  height: 300px;
  margin: 0 10px;
  border-radius: 10px;
  padding: 10px 15px;
`;
export const Header = styled.View``;

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const CloseButtonText = styled.Text`
  color: ${Colors.grayColor};
  font-size: 23px;
  align-self: flex-end;
  font-weight: bold;
`;
export const TaskTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  align-self: center;
  color: ${Colors.secondaryColor};
`;
export const PomodorosQtd = styled.Text`
  font-size: 15px;
  color: ${Colors.secondaryColor};
  align-self: center;
`;

export const Body = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const Time = styled.Text`
  color: ${Colors.primaryColor};
  font-weight: bold;
  font-size: 55px;
  margin-bottom: 20px;
`;
