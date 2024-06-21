import React, { useState, ChangeEvent, ReactNode } from "react";
import Avatar from "@mui/material/Avatar";
import { Badge, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { DatePicker } from "@mui/x-date-pickers";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Dayjs } from "dayjs";
import { MuiTelInput } from "mui-tel-input";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import {
  AvatarContainer,
  MainContainer,
  RowContainer,
  StyledButtonText,
} from "@/pages/EditProfile/styles";
import BottomNav from "@/components/BottomNav";
import NotificationsHeader from "@/components/NotificationsHeader";
import CustomInput from "@/components/StyledFormInput";
import { healthInsuranceOptions } from "@/utils/healthInsuranceOptions";
import { bloodTypeOptions } from "@/utils/bloodTypeOptions";
import { comorbitiesOptions } from "@/utils/comorbitiesOptions";

const EditProfile = () => {
  const [userName, setUserName] = useState("Matheus");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [healthInsurance, setHealthInsurance] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [password, setPassword] = useState("");
  const [comorbities, setComorbities] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [birthDate, setBirthDate] = useState<Dayjs>();
  const [bloodType, setBloodType] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [userSex, setUserSex] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const sexOptions = [
    { label: "Homem", value: "Homem", icon: <MaleIcon /> },
    { label: "Mulher", value: "Mulher", icon: <FemaleIcon /> },
    { label: "Outro", value: "Outro", icon: null },
  ];
  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };
  return (
    <>
      <NotificationsHeader pageName="Editar Perfil" />
      <MainContainer>
        <AvatarContainer>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <EditIcon
                sx={{
                  color: "white",
                  bgcolor: "#C62727",
                  borderRadius: "50%",
                  padding: "3px",
                }}
              />
            }
          >
            <Avatar
              sx={{ bgcolor: "#253B6E", width: 56, height: 56 }}
              alt="Avatar Icon"
              src="/broken-image.jpg"
            >
              {userName?.charAt(0)}
            </Avatar>
          </Badge>
        </AvatarContainer>
        <RowContainer>
          <CustomInput
            id="outlined-text"
            label="Nome completo"
            type="text"
            variant="filled"
            value={userName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
        </RowContainer>
        <RowContainer>
          <Autocomplete
            id="size-medium-filled"
            options={sexOptions}
            size="medium"
            fullWidth
            value={userSex}
            onChange={(event: unknown, newValue) =>
              setUserSex({
                label: newValue?.label,
                value: newValue?.value,
              } as { label: string; value: string } | null)
            }
            renderOption={(
              props,
              option: { label: string; value: string; icon: ReactNode },
            ) => (
              <li {...props}>
                <RowContainer
                  style={{ justifyContent: "space-between", padding: "0.5rem" }}
                >
                  <Typography sx={{ padding: "0.5rem" }}>
                    {option.label}
                  </Typography>
                  {option.icon}
                </RowContainer>
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Sexo" />
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
            slotProps={{ textField: { variant: "outlined" } }}
            disableFuture
            onChange={(date) => setBirthDate(date as Dayjs)}
          />
        </RowContainer>
        <RowContainer>
          <TextField
            id="filled-adornment-email"
            value={email}
            type="email"
            label="E-mail"
            fullWidth
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            variant="outlined"
          />
        </RowContainer>
        <RowContainer>
          <MuiTelInput
            label="Telefone"
            fullWidth
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </RowContainer>
        <RowContainer>
          <Autocomplete
            id="size-medium-filled"
            options={healthInsuranceOptions}
            size="medium"
            value={healthInsurance}
            onChange={(
              event: unknown,
              newValue: { label: string; value: string } | null,
            ) =>
              setHealthInsurance(newValue as { label: string; value: string })
            }
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Plano de saúde"
              />
            )}
          />
        </RowContainer>
        <RowContainer>
          <Autocomplete
            id="size-medium-filled"
            options={bloodTypeOptions}
            size="medium"
            value={bloodType}
            onChange={(
              event: unknown,
              newValue: { label: string; value: string } | null,
            ) => setBloodType(newValue as { label: string; value: string })}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tipo sanguíneo"
              />
            )}
          />{" "}
        </RowContainer>
        <RowContainer>
          <Autocomplete
            id="size-medium-filled"
            options={comorbitiesOptions}
            size="medium"
            value={comorbities}
            onChange={(
              event: unknown,
              newValue: { label: string; value: string } | null,
            ) => setComorbities(newValue as { label: string; value: string })}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Comorbidades" />
            )}
          />
        </RowContainer>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => toast.success("Perfil atualizado com sucesso!")}
        >
          {
            // TODO: Implementar o salvar
          }
          <StyledButtonText>Salvar</StyledButtonText>
        </Button>{" "}
      </MainContainer>
      <BottomNav />
    </>
  );
};
export default EditProfile;
