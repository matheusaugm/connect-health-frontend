import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 96px;
  border-radius: 6px;
  display: flex;
  padding: 13px 15px 13px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000040;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ExamInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 4px;
`;

export const ExamDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ExamDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
