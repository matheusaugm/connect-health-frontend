import styled from "styled-components";

export const StyledMainContainer = styled.div<{ isDisabled: boolean }>`
  padding: 0.5rem;
  width: 100%;
  max-width: 200px;
  height: 100%;
  border: 1px solid
    ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.disabled : theme.colors.primary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

export const StyledIcon = styled.img<{ isDisabled: boolean }>`
  filter: ${({ isDisabled }) => (isDisabled ? "grayscale(100%)" : "none")};
`;
