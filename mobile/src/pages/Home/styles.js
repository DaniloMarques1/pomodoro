import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primaryColor};
`;
export const Header = styled.View`
  margin: 40px 20px;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${Colors.whiteColor};
  font-size: 24px;
  font-weight: bold;
  margin: 30px 20px;
`;
export const ImageLogo = styled.Image`
  margin-left: auto;
`;

export const Menu = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const MenuText = styled.Text``;
