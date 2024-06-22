import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import {
  ButtonsContainer,
  MainContainer,
  StyledButtonText,
  StyledImage,
} from "@/pages/Home/styles";
import mainLogo from "@/assets/main_page_logo.svg";
import mainHero from "@/assets/main_page_hero.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      {mainLogo && <StyledImage src={mainLogo} alt="mainLogo" />}
      {mainHero && <StyledImage src={mainHero} alt="mainHero" />}
      <ButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate("/login")}
        >
          <StyledButtonText>Entrar</StyledButtonText>
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/register")}
        >
          <StyledButtonText>Cadastre-se</StyledButtonText>
        </Button>
      </ButtonsContainer>
    </MainContainer>
  );
}

export default Home;
