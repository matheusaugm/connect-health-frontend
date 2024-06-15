import { useState } from "react";
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
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <MainContainer>
      <StyledImage src={mainLogo} alt="mainLogo" />
      <StyledImage src={mainHero} alt="mainLogo" />
      <ButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => setCount(count + 1)}
        >
          <StyledButtonText>Entrar</StyledButtonText>
        </Button>{" "}
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
