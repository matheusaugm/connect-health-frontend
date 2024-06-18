import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 5rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  gap: 16px;
`;

export const FillerContainer = styled.div`
  width: 95%;
  height: 111px;
  border-radius: 6px;
  background: linear-gradient(180deg, #ffffff 0%, #c92c2c 100%);
`;
export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const MenuOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 95%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
