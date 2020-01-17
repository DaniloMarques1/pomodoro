import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  height: 100px;
  border-radius: 14px;
  margin: 0 20px;
  elevation: 5;
  padding: 10px 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
`;
export const TitleView = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${Colors.secondaryColor};
  font-size: 17px;
`;

export const PomodorosView = styled.View`
  margin-left: auto;
  flex-direction: row;
`;

export const Pomodoros = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${Colors.secondaryColor};
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const IconButton = styled.TouchableOpacity`
  margin: 0 30px;
`;
