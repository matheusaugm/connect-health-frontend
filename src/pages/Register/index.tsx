import React, { useState } from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { DatePicker } from "@mui/x-date-pickers";
import { Moment } from "moment";
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

function Register() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [healthInsurance, setHealthInsurance] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [birthDate, setBirthDate] = useState<Moment>();
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
          format="DD/MM/YYYY"
          sx={{ width: "100%" }}
          slotProps={{ textField: { variant: "filled" } }}
          disableFuture
          onChange={(date) => setBirthDate(date as Moment)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setCount(count + 1)}
        >
          {
            // TODO: Implementar o termo de compromissos e validar os métodos da API pra criar novo usuário
          }
          <StyledButtonText>Cadastrar</StyledButtonText>
        </Button>
      </FormContainer>
    </MainContainer>
  );
}

export default Register;
