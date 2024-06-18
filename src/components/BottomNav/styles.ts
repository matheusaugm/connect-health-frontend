import styled from "styled-components";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
    justify-content: space-evenly;
  min-width: 100%;
  gap: 10px;
  position: fixed;
  elevation: above;
  background-color: ${({ theme }) => theme.colors.secondary};
  bottom: 0;
  left: 0;
  right: 0;
`;
