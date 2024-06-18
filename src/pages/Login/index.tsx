import React, { useState } from "react";
import Button from "@mui/material/Button";

import moment, { Moment } from "moment";
import { Typography } from "@mui/material";
import {
  FormContainer,
  MainContainer,
  StyledButtonText,
  StyledImage,
  StyledTextField,
  StyledTextFormHeader,
} from "@/pages/Login/styles";
import headerIcon from "@/assets/main_page_logo.svg";
import CustomInput from "@/components/StyledFormInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  moment.locale("pt-br");
  return (
    <MainContainer>
      <StyledImage src={headerIcon} alt="mainLogo" />
      <FormContainer>
        <StyledTextFormHeader>Entre na sua conta</StyledTextFormHeader>

        <CustomInput
          id="filled-adornment-email"
          value={email}
          type="email"
          label="E-mail"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <CustomInput
          id="filled-adornment-password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <StyledTextField>
          <Typography align="right" color="primary" fontWeight="bold">
            Esqueci minha senha
          </Typography>
        </StyledTextField>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => console.log("Entrar")}
        >
          {
            // TODO: Implementar o login
          }
          <StyledButtonText>Entrar</StyledButtonText>
        </Button>
      </FormContainer>
    </MainContainer>
  );
}

export default Login;
