import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ptBR } from "@mui/x-date-pickers/locales";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  MainContainer,
  StyledButtonText,
  StyledImage,
  StyledTextFormHeader,
} from "@/pages/Register/styles";
import headerIcon from "@/assets/register_icon.svg";
import inlineIcon from "@/assets/inline_heart_icon.svg";
import CustomInput from "@/components/StyledFormInput";
import { healthInsuranceOptions } from "@/utils/healthInsuranceOptions";

import { useUser } from "@/stores/UserStore";

function Register() {
  const navigate = useNavigate();

  const { user, setUser, setIsAuthenticated } = useUser();

  const [name, setName] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");
  const [confirmPassword, setConfirmPassword] = useState(user?.password || "");
  const [healthInsurance, setHealthInsurance] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [birthDate, setBirthDate] = useState<Dayjs | null>(
    dayjs(user?.birthDate),
  );
  const [surname, setSurname] = useState(""); // Assuming surname is not part of the UserProps

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const newUser = {
      username: name,
      password,
      email,
      healthInsurance: healthInsurance?.value || "",
      birthDate: birthDate?.format("YYYY-MM-DD") || "",
      bloodType: "", // Add appropriate default or fetched values
      comorbities: "", // Add appropriate default or fetched values
      userSex: "", // Add appropriate default or fetched values
    };

    const resolveAfter3Sec = new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        // Simulate a registration success
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("isAuthenticated", "true");
        resolve();
      }, 3000),
    );

    try {
      toast.promise(resolveAfter3Sec, {
        pending: "Cadastrando...",
        success: "Cadastro realizado com sucesso!",
        error: "Falha no cadastro 🤯",
      });

      await resolveAfter3Sec;
      // Redirect or perform other actions upon successful registration
      navigate("/");
    } catch (error) {
      // Handle registration failure
      toast.error("Falha no cadastro");
    }
  };

  return (
    <MainContainer>
      <StyledImage src={headerIcon} alt="mainLogo" />
      <FormContainer>
        <StyledTextFormHeader>
          Crie uma c<img src={inlineIcon} alt="inlineIcon" />
          nta
        </StyledTextFormHeader>
        <CustomInput
          id="filled-start-adornment-text"
          type="text"
          value={name}
          label="Nome"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <CustomInput
          id="filled-start-adornment"
          value={surname}
          type="text"
          label="Sobrenome"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSurname(e.target.value)
          }
        />
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
        <CustomInput
          id="filled-adornment-confirm-password"
          label="Confirmar senha"
          type="password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
        <Autocomplete
          id="size-medium-filled"
          options={healthInsuranceOptions}
          size="medium"
          value={healthInsurance}
          onChange={(
            event: unknown,
            newValue: { label: string; value: string } | null,
          ) => setHealthInsurance(newValue as { label: string; value: string })}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Plano de saúde" />
          )}
        />
        <DatePicker
          key="birthDate"
          value={birthDate}
          label="Data de nascimento"
          localeText={
            ptBR.components.MuiLocalizationProvider.defaultProps.localeText
          }
          format="DD/MM/YYYY"
          sx={{ width: "100%" }}
          slotProps={{ textField: { variant: "filled" } }}
          disableFuture
          onChange={(date) => setBirthDate(date as Dayjs)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleRegister}
        >
          <StyledButtonText>Cadastrar</StyledButtonText>
        </Button>
      </FormContainer>
    </MainContainer>
  );
}

export default Register;
