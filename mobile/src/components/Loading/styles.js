import styled from 'styled-components/native';
import Colors from '../../styles/colors';
export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
`;

export const LoadingContainer = styled.View`
  height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  margin: 0 20px;
  padding: 10px 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.primaryColor};
`;
