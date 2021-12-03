import styled, { css } from "styled-components";

import {
  Task,
  CalendarMinus,
  BiMessageAltDetail,
  HiOutlineNewspaper,
  PlayCircle,
  FileEarmarkBarGraphFill,
  Printer,
} from '../../styles/Icons';

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 2;
  background: var(--menu-bar);
`;

export const MenuButton = styled.div``;


export const Perfil = styled.div``;

export const Avatar = styled.div``;

export const Pessoal = styled.div``;

export const Content = styled.div``;

export const Dashboard = styled.div``;

export const VisaoGeral = styled(Task)`
  ${iconCSS}
`;

export const Administrativo = styled.div``;

export const Callendar = styled(CalendarMinus)`
  ${iconCSS}
`;

export const Comments = styled(BiMessageAltDetail)`
  ${iconCSS}
`;

export const News = styled(HiOutlineNewspaper)`
  ${iconCSS}
`;

export const Play = styled(PlayCircle)`
  ${iconCSS}
`;

export const Reports = styled(FileEarmarkBarGraphFill)`
  ${iconCSS}
`;

export const Impressions = styled(Printer)`
  ${iconCSS}
`;

export const Image = styled.div``;
