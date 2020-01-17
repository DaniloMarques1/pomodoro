import styled from 'styled-components/native';
import Colors from '../../styles/colors';
// export const Container = styled.ScrollView.attrs({
//   horizontal: true,
//   contentContainerStyle: {},
// })``;
export const Container = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`;

export const MenuScroll = styled.ScrollView.attrs({
  contentContainerStyle: { flexDirection: 'row', justifyContent: 'center' },
  horizontal: true,
})``;

export const MenuContainer = styled.View`
  background-color: ${Colors.greenColor};
  align-items: center;
  border-radius: 15px;
  margin-bottom: -10px;
  padding-bottom: 10px;
`;

export const MenuButton = styled.TouchableOpacity``;
