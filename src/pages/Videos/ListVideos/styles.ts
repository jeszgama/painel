import styled from "styled-components";

import { BellFill, LogOut } from './../../../styles/Icons';

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: sticky;
  background: var(--white) ;
`;

export const MenuTop = styled.div`
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
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-color: red;
`;

export const Painel = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: var(--visao-geral);
  padding: 0px 4rem 0px 4rem;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;

export const Title = styled.div`
  > span {
    font-size: 28px;
    font-weight: bolder;
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

export const Button2 = styled.div`
  > span{
      color: var(--visao-geral);
      font-weight: bolder;
      font-size: 18px;
  }
  border-radius: 10px;
  width: 6rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  border: 1px solid #707070;
  background-color: var(--white);
  &:hover{
    cursor: pointer;
  }
`;

export const WrapperVideos = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 5rem 3rem 5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Preview = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 250px;
  gap: 0.5rem;
  
  > span {
    color: var(--black);
    /* text-align: justify; */
  }

  > img{
    height: 150px;
    width: 250px;
  }
`;

export const Picture = styled.div`
`;

export const Description = styled.div`
`;

export const Bell = styled(BellFill)`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--black);
`;
