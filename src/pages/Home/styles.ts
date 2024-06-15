import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.white} 50%
  );
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  gap: 16px;
`;
export const StyledButtonText = styled.span`
  padding: 1rem 4rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StyledImage = styled.img`
  max-width: 70%;
  height: auto;
`;
