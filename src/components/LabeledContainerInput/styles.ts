import styled from "styled-components";

export const LabelFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #f6f6f6;
`;
