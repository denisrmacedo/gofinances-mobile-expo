import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  background-color: red;
  padding: 0 24px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  /* background-color: red; */
`;

export const User = styled.View`
  margin-left: 17px;
  /* background-color: blue; */
`;

export const UserGretting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  /* background-color: yellow; */
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

