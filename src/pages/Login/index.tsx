import React, { useState } from "react";
import Button from "@mui/material/Button";
import moment from "moment";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { useUser } from "@/stores/UserStore";

function Login() {
  const { setUser, setIsAuthenticated } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginAttempt = async () => {
    if (email && password) {
      const resolveAfter3Sec = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate a login success
          const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
          if (storedUser.email === email && storedUser.password === password) {
            setUser(storedUser);
            setIsAuthenticated(true);
            resolve();
          } else {
            reject();
          }
        }, 3000);
      });

      try {
        toast.promise(resolveAfter3Sec, {
          pending: "Entrando...",
          success: "Bem vindo!",
          error: "Login falhou 🤯",
        });

        await resolveAfter3Sec;
        navigate("/home");
      } catch (error) {
        // Handle login failure
      }
    } else {
      toast.error("Please fill in both email and password fields.");
    }
  };

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
          <a href="#">
            <Typography align="right" color="primary" fontWeight="bold">
              Esqueci minha senha
            </Typography>
          </a>
        </StyledTextField>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => handleLoginAttempt()}
        >
          <StyledButtonText>Entrar</StyledButtonText>
        </Button>
        <Typography
          fontWeight="600"
          onClick={() => navigate("/register")}
          align="center"
          color="primary"
        >
          {" "}
          Criar uma conta
        </Typography>
      </FormContainer>
    </MainContainer>
  );
}

export default Login;
