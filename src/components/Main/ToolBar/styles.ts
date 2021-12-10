import styled from "styled-components";

import { LogOut } from './../../../styles/Icons';


export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 3rem 1rem 3rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  background: var(--white);
`;

export const InformationOfTheDay = styled.div`
  >span{
    font-size: 16px;
    font-weight: 600;
    color: #5B5B5B;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LogOutPainel = styled.div`
  >span{
    font-size: 16px;
    font-weight: 550;
    color: var(--highlight);
  }

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  &:hover{
    cursor: pointer;
  }
`;

export const LogOutIcon = styled(LogOut)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--highlight);
`;