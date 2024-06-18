import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
    max-width: 200px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
