import styled from "styled-components";

import { BellFill, Verified } from './../../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white) ;
`;

export const Painel = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--visao-geral);
  padding: 2rem 4rem;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
`;

export const Information = styled.div`
  width: 700px;
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
  /* width: 50%; */
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
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem 1rem;
  flex-wrap: wrap;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  width: 273.33px;
  gap: 0.5rem;
  
  /* box-shadow: 0px 3px 6px #00000029; */

  box-shadow: 0px 3px 6px #00000029;

  border-radius: 11px;

  > span {
    color: var(--black);
    position: relative;

      &::before{
        content: "";
        position: absolute;
        border-bottom: 3px solid #16A34A;
        width: 50%;
        left:0;
        opacity: 1;
        bottom:-15px;
      }
  }

  > img{
    height: 150px;
    width: 100%;
    border-radius: 11px 11px 0px 0px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0rem;
  gap: 1rem;

  > button {
    border: 1px solid #000;
    padding: 0.5rem 2rem;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const Verificated = styled(Verified)`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--verificated);
  cursor: pointer;
`;

export const Picture = styled.div`
`;

export const Description = styled.div`
`;

export const Bell = styled(BellFill)`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
`;
