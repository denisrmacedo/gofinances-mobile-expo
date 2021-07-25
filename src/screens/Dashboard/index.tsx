import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
 } from './styles'

export function Dashboard(){
  return(
    <Container>
      
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/5804067?v=4'}}
            />
          <User>
          <UserGreeting>Olá,</UserGreeting>
            <UserName>Denis</UserName>
            </User>
          </UserInfo>
          </UserWrapper>
        </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount="1111"
              lastTransaction="01 de janeiro"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount="222"
              lastTransaction="02 de janeiro"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount="333"
              lastTransaction="03 de janeiro"
            />
          </HighlightCards>

    </Container>
  );
}

