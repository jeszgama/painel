import React from 'react';

import Twitter from '../../assets/twitter.svg';

import {
  Container,
  MenuButton,
  Perfil,
  Avatar,
  Pessoal,
  Content,
  Dashboard,
  VisaoGeral,
  Administrativo,
  Callendar,
  Comments,
  Play,
  News,
  Reports,
  Impressions,
  Image,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Perfil>
        <Avatar />
        <Pessoal>
          <span>Ir. Samuel Alvares</span>
          <span>ir.samuel@gmail.com</span>
        </Pessoal>
      </Perfil>

      <Content>
        <Dashboard>
          <span>DASHBOARD</span>
          <MenuButton>
            <VisaoGeral />
            <span>Visão Geral</span>
          </MenuButton>
        </Dashboard>
        <Administrativo>
          <span>ADMINISTRATIVO</span>
          <MenuButton>
            <Callendar />
            <span>Calendário de Retiros</span>
          </MenuButton>
          <MenuButton>
            <Comments />
            <span>Vivência com os S.Anjos</span>
          </MenuButton>
          <MenuButton>
            <News />
            <span>Sobre/News</span>
          </MenuButton>
          <MenuButton>
            <Play />
            <span>Vídeos</span>
          </MenuButton>
          <MenuButton>
            <Reports />
            <span>Relatórios</span>
          </MenuButton>
          <MenuButton>
            <Impressions />
            <span>Impressões</span>
          </MenuButton>
        </Administrativo>
      </Content>

      <Image>
        <img src={Twitter} alt="" />
      </Image>
    </Container>
  );
}

export default MenuBar;