import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative; /* Para permitir o posicionamento absoluto do botão de exclusão */
  width: 100%;
  height: 100%;
  max-height: 96px;
  border-radius: 6px;
  padding: 13px 15px;
  align-items: center;
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000040;
`;

export const IconContainer = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExamInfoContainer = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

export const ExamDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ExamDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 10000px;
  right: 10px;
`;
