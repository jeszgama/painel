import React from 'react';

import {
  Container,
  InformationOfTheDay,
  LogOutPainel,
  LogOutIcon,
} from './styles';

const ToolBar: React.FC = () => {
  return (
    <Container>
      <InformationOfTheDay>
        <span>24 de novembro de 2021 | Cuiabá - MT</span>
      </InformationOfTheDay>
      <LogOutPainel>
        <span>Sair do Perfil</span>
        <LogOutIcon />
      </LogOutPainel>
    </Container>
  );
}

export default ToolBar;