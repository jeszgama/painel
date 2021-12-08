import styled from "styled-components";

import { LogOut } from './../../../styles/Icons';


export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  padding: 0px 3rem 0px 3rem;
`;

export const InformationOfTheDay = styled.div`
  >span{
    font-size: 16px;
    font-weight: 550;
    color: var(--black);
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
  /* flex-shrink: 0;
  width: 30px;
  height: 30px; */
  width: 24px;
  height: 24px;
  fill: var(--black);

`;