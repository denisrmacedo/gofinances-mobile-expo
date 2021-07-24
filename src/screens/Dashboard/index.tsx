import React from 'react';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
 } from './styles'

export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/5804067?v=4'}} />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Denis</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
         </UserWrapper>
         
      </Header>
    </Container>
  );
}

