import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;