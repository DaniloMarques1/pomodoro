import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primaryColor};
  justify-content: flex-end;
`;
export const Header = styled.View`
  margin: 0 10px 0 20px;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 24px;
  font-weight: bold;
  margin: 30px 20px;
`;
export const ImageLogo = styled.Image`
  margin-top: 10px;
  margin-left: auto;
`;

export const Body = styled.View``;

export const List = styled.FlatList`
  z-index: 2;
  position: relative;
`;

export const Empty = styled.Text`
  font-size: 22px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
`;
