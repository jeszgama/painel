import React from 'react';

import Picture1 from '../../../assets/picture.png';
import Picture2 from '../../../assets/picture2.png';
import Picture3 from '../../../assets/picture3.png';

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
          <img src={Picture2} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture1} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture3} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>

        <Preview>
          <img src={Picture2} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture1} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture3} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>

        <Preview>
          <img src={Picture2} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture1} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
        <Preview>
          <img src={Picture3} alt="" />
          <span>A Obra dos Santos Anjos, assim como se apresenta hoje, é «uma associação pública da Igreja em conformidade com a doutrina tradicional e as diretrizes da</span>
        </Preview>
      </WrapperVideos>
    </Container>
  );
}

export default ListVideos;