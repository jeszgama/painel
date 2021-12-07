import React from 'react';

import {
  Container,
  Painel,
  MenuTop,
  InformationOfTheDay,
  LogOutPainel,
  LogOutIcon,
  Information,
  Title,
  Bell,
  Button,
  Button2,
  WrapperVideos,
  Preview,
  Picture,
} from './styles';

const ListVideos: React.FC = () => {
  return (
    <Container>
      <MenuTop>
        <InformationOfTheDay>
          <span>24 de novembro de 2021 | Cuiabá - MT</span>
        </InformationOfTheDay>
        <LogOutPainel>
          <span>Sair do Perfil</span>
          <LogOutIcon />
        </LogOutPainel>
      </MenuTop>
      <Painel>
        <Information>
          <Title>
            <span>Ir. Samuel,</span>
            <Bell />
          </Title>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos deserunt expedita reiciendis quibusdam voluptas sequi repellat. Quia praesentium quam exercitationem perferendis repudiandae?</span>
        </Information>
        <Button>
          <Button2>
            <span>NOVO</span>
          </Button2>
        </Button>
      </Painel>

      <WrapperVideos>
        <Preview>
          <Picture />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus eum sapiente temporibus labore eos porro deserunt maxime impedit unde!</span>
        </Preview>
        <Preview>
          <Picture />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus eum sapiente temporibus labore eos porro deserunt maxime impedit unde!</span>
        </Preview>
        <Preview>
          <Picture />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus eum sapiente temporibus labore eos porro deserunt maxime impedit unde!</span>
        </Preview>
      </WrapperVideos>
    </Container>
  );
}

export default ListVideos;