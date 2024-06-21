import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 5rem 0.8rem;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  min-width: 100%;
  gap: 16px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LabelFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const SpecificOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
`;

export const AttachSection = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px dashed #253b6e;
  border-radius: 8px;
  padding: 16px;
`;

export const AttachOption = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const AttachIcon = styled.img`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DottedDivider = styled.div`
  border-left: 2px dashed #253b6e;
  height: 100%;
  margin: 0 16px;
`;
