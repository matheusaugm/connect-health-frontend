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

export const AvatarContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  gap: 12px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const StyledButtonText = styled.span`
  padding: 1rem 4rem;
`;