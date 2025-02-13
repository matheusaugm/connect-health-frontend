import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.white} 50%
  );
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  justify-content: space-evenly;
  min-height: 100%;
`;
export const StyledButtonText = styled.span`
  padding: 1rem 4rem;
`;
export const FormContainer = styled.div`
  display: flex;
  border-radius: 35px 35px 0 0;
  padding: 4rem 2rem;
  width: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  gap: 16px;
`;
export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;
export const StyledTextFormHeader = styled.span`
  font-family: "Podkova", serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledTextField = styled.div`
  min-width: 100%;
  align-items: flex-end;
`;
