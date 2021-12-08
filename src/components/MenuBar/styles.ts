import styled, { css } from "styled-components";

import {
  Task,
  CalendarMinus,
  BiMessageAltDetail,
  HiOutlineNewspaper,
  PlayCircle,
  FileEarmarkBarGraph,
  Printer,
} from '../../styles/Icons';

const iconCSS = css`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  /* color: var(--white); */
`;

export const Container = styled.div`
  width: 300px;
  background: var(--menu-bar);
  position: sticky;
  max-height: 100vh;
  height: 100vh;

  top: 0;
  left: 0;
  overflow-y: auto;
  
  display:flex;
  flex-direction: column;

  border-right: 12px solid var(--menu-bar-border);
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Avatar = styled.div`
  > img {
    border-radius: 50%;
    height: 118px;
    width: 118px;
    border: 3px solid var(--menu-bar-border);
  }
`;

export const Pessoal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  > span {
    color: var(--white);
    &:first-child {
      font-weight: bold;
      font-size: 18px;
    }
    &:last-child {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-right: 15px;

  > span {
    color: var(--letter);
    padding-left: 10px;
  }
`;

export const Administrativo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  padding-right: 15px;
  > span {
    color: var(--letter);
    margin-bottom: 1rem;
    padding-left: 10px;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 0;
  outline: 0;
  color: var(--white);

  > span {
    margin-left: 16px;
    font-size: 17px;
  }
  
  cursor: pointer;
  padding-left: 10px;
  border-radius: 15px;
  padding-right: 15px;

  &:hover{
    background-color: var(--menu-bar-hover);
    transition: 0.2s;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  > img {
    height: 118px;
    width: 118px;
  }
`;

export const VisaoGeral = styled(Task)`
  ${iconCSS}
`;

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

export const Reports = styled(FileEarmarkBarGraph)`
  ${iconCSS}
`;

export const Impressions = styled(Printer)`
  ${iconCSS}
`;
