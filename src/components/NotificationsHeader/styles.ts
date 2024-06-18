import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 1.5rem;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center; /* To vertically align the icons */
  background-color: white; /* Optional: Add a background color if needed */
  justify-items: end;
  height: 1.5rem;
`;

export const StyledLogoIcon = styled.img`
  grid-column: 2 / 3;
  width: 120px;
  align-self: center;
  height: auto;
`;

export const StyledNotificationIcon = styled.img`
  display: flex;
  grid-column: 3 / 4;
  width: 37px; /* Adjust width as needed */
  height: auto;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  grid-column: 1 / 2;
  align-items: center;
  justify-content: center;
    justify-self: start;
`;
