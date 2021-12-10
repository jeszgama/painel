import styled from "styled-components";

import { PlusCircle, CloseCircle, CgNotes, Dot } from './../../styles/Icons'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white) ;
`;

export const Painel = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--visao-geral);
  padding: 1rem 4rem 2rem 4rem;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
`;

export const Information = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
  
  > span{
    letter-spacing: 1.2px;
  }
`;

export const Title = styled.div`
  > span {
    font-size: 28px;
    font-weight: 500;

    &::before{
      content: "";
      position: absolute;
      border-bottom: 2px solid var(--white);
      width: 7rem;
      left:0;
      bottom:0
    }
  }

  line-height: 3rem;
  position: relative;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Wrapper = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 1.5rem;
`;

export const EventsInformations = styled.div` 
  background: #F8F8F8;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border-bottom: 10px solid #CDFFBE;
  border-radius: 3px;
  box-shadow: 0px 3px 6px #00000029;
`;

export const Description = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 6rem;
  align-items: flex-end;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  & th {
    background-color: #CDFFBE;
    padding: 0.5rem 0;

    color: #4A4A4A;

    &:first-child {
      border-radius: 20px 0px 0px 20px;
      padding: 0 0 0 2rem;
    }

    &:last-child {
      border-radius: 0px 20px 20px 0px;
      padding: 0 2rem 0 0;
    }
  }

  & th:first-child{
    text-align: left;
  }
`;

export const TableBody = styled.tbody`
  
  & tr {
    border-bottom: 1px solid #DCDCDC;
  }

  & td {
    padding: 0.5rem 0;

    color: #4A4A4A;

    &:first-child {
      padding: 0 0 0 2rem;
    }

    &:last-child {
      padding: 0 2rem 0 0;
    }
  }

  & td{
    text-align: center;
  }
  & td:first-child{
    text-align: left;
  }
`;


export const Bloco1 = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  > span{
    color: #4A4A4A;
    position: relative;

    &:first-child{
      font-weight: bold;
    }
    &:last-child{
      &::before{
        content: "";
        position: absolute;
        border-bottom: 2px solid #BCBCBC;
        width: 7rem;
        left:0;
        opacity: 1;
        bottom:-15px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex ;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  width: 160px;
  height: 35px;
  background: #CDFFBE;
  border: 1px solid #707070;
  border-radius: 22px;
  > span {
    color: #4A4A4A;
  }
`;

export const SiteInformations = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Graphic = styled.div` 
  background: #F8F8F8;
  border-bottom: 5px solid #C3B7FF;
  border-radius: 3px;
  box-shadow: 0px 3px 6px #00000029;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > span{
    padding: 1rem 0rem 0rem 1rem;
    color: #4A4A4A;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        border-bottom: 2px solid #BCBCBC;
        width: 4rem;
        left: 2;
        opacity: 1;
        bottom:-12px;
      }
  }

  > img {
    max-height: 150px;
    max-width: 312px;
    justify-content: center;
    align-items: center;
  }


`;

export const Notes = styled.div` 
  background: #F8F8F8;
  border-bottom: 5px solid #FF9233;
  border-radius: 3px;
  box-shadow: 0px 3px 6px #00000029;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TitleNotes = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  >span{
    color: #4A4A4A;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        border-bottom: 2px solid #BCBCBC;
        width: 4rem;
        opacity: 1;
        bottom:-12px;
      }
  }
`;

export const BlocoTitle2 = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem 0rem 1rem;

  
  &:first-child{
    align-items: flex-start;
  }

  &:last-child{
    justify-content: flex-end;
  }

  >span{
    color: #4A4A4A;
    font-weight: 600;
  }
`;

export const TitleContainer = styled.div` 
  display: flex;
  flex: 1;
  padding-left: 0.5rem ;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Note = styled(CgNotes)` 
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: #000;
`;

export const Plus = styled(PlusCircle)` 
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  color: #FF9233;
  cursor: pointer;
`;

export const BlocoInfo2 = styled.div` 
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  align-items: center;
  padding: 0 1rem 0.2rem 0;
`;

export const Text = styled.div` 
  display: flex;
  flex-direction: column;
  max-width: 228px;
  flex-wrap: wrap;

  > span {
    color: #4A4A4A;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        border-bottom: 2px solid #BCBCBC;
        width: 100%;
        opacity: 1;
        bottom:-5px;
      }
  }
`;

export const Dots = styled(Dot)` 
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: #FF9233;
`;

export const Close = styled(CloseCircle)` 
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: #D10606;
  cursor: pointer;
`;
