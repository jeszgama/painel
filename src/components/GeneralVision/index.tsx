import React from 'react';

import grafico from '../../assets/grafico.png';

import {
  Container,
  Painel,
  Information,
  Title,
  Wrapper,
  EventsInformations,
  SiteInformations,
  Description,
  Bloco1,
  Button,
  Table,
  Graphic,
  Notes,
  BlocoTitle2,
  Note,
  Plus,
  BlocoInfo2,
  Dots,
  Text,
  Close,
  TitleNotes,
  TitleContainer,
  TableHead,
  TableBody,
} from './styles';

const GeneralVision: React.FC = () => {
  return (
    <Container>
      <Painel>
        <Information>
          <Title>
            <span>Louvor a Deus, Ir. Samuel!</span>
          </Title>
          <span>"O amor silencioso muitas vezes vale mais perante Deus do que o amor loquaz."</span>
        </Information>
      </Painel>

      <Wrapper>
        <EventsInformations>
          <Description>
            <Bloco1>
              <span>Próximos retiros</span>
              <span>Quantidade de inscritos por retiros</span>
            </Bloco1>
            <Button type="button">
              <span>Pesquisar</span>
            </Button>
          </Description>
          <Table>
            <TableHead>
              <tr>
                <th>
                  <span>Nome do Retiro</span>
                </th>
                <th>
                  <span>Local</span>
                </th>
                <th>
                  <span>Data</span>
                </th>
                <th>
                  <span>Quantidade</span>
                </th>
              </tr>
            </TableHead>
            <TableBody>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <tr>
                    <td><span>Retiro de Carnaval</span></td>
                    <td><span>Cuiabá-MT</span></td>
                    <td><span>12-18 fev</span></td>
                    <td><span>25</span></td>
                  </tr>
                ))
              }
            </TableBody>
          </Table>
        </EventsInformations>

        <SiteInformations>
          <Graphic>
            <span>Número de visitantes no site</span>
            <img src={grafico} alt="" />
          </Graphic>

          <Notes>
            <BlocoTitle2>
              <TitleNotes>
                <span>Anotações</span>
              </TitleNotes>
              <TitleContainer>
                <Note />
                <Plus />
              </TitleContainer>
            </BlocoTitle2>
            <BlocoInfo2>
              <Dots />
              <Text>
                <span>20/11/2021 - Ligar para fulano</span>
              </Text>
              <Close />
            </BlocoInfo2>

            <BlocoInfo2>
              <Dots />
              <Text>
                <span>18/11/2021 - Fazer cadastro de retiro novo no dia tal de tal de não sei mais o que, apenas escrevendo para ter espaço</span>
              </Text>
              <Close />
            </BlocoInfo2>

            <BlocoInfo2>
              <Dots />
              <Text>
                <span>16/11/2021 - Não esquecer de resolver aquilo!</span>
              </Text>
              <Close />
            </BlocoInfo2>
          </Notes>
        </SiteInformations>
      </Wrapper>
    </Container>
  );
}

export default GeneralVision;