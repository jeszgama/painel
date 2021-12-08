import styled from "styled-components";

import { BellFill } from './../../../styles/Icons';

export const Container = styled.div`
  /* height: 100%; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  background: var(--white) ;
`;

export const Painel = styled.div`
  /* height: 220px; */
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  background: var(--visao-geral);
  padding: 2rem 4rem;
  justify-content: space-between;
  align-items: center;
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
  /* width: 100%; */
  /* height: 100%; */
  /* padding: 2rem 4rem; */
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Preview = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 273.33px;
  gap: 0.5rem;
  
  > span {
    color: var(--black);
    /* text-align: justify; */
  }

  > img{
    height: 150px;
    width: 100%;
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
