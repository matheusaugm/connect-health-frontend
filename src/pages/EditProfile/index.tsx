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
import dayjs, { Dayjs } from "dayjs";
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
import { useUser } from "@/stores/UserStore";

interface OptionType {
  label: string;
  value: string;
  icon?: ReactNode;
}

const EditProfile = () => {
  const { user, setUser } = useUser();
  const sexOptions: OptionType[] = [
    { label: "Homem", value: "Homem", icon: <MaleIcon /> },
    { label: "Mulher", value: "Mulher", icon: <FemaleIcon /> },
    { label: "Outro", value: "Outro", icon: null },
  ];

  const [userName, setUserName] = useState(user?.username || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [email, setEmail] = useState(user?.email || "");
  const [healthInsurance, setHealthInsurance] = useState<OptionType | null>(
    user?.healthInsurance
      ? healthInsuranceOptions.find(
          (option) => option.value === user.healthInsurance,
        ) || null
      : null,
  );
  const [comorbities, setComorbities] = useState<OptionType | null>(
    user?.comorbities
      ? comorbitiesOptions.find(
          (option) => option.value === user.comorbities,
        ) || null
      : null,
  );
  const [birthDate, setBirthDate] = useState<Dayjs | null>(
    user?.birthDate ? dayjs(user.birthDate) : null,
  );
  const [bloodType, setBloodType] = useState<OptionType | null>(
    user?.bloodType
      ? bloodTypeOptions.find((option) => option.value === user.bloodType) ||
          null
      : null,
  );
  const [userSex, setUserSex] = useState<OptionType | null>(
    user?.userSex
      ? sexOptions.find((option) => option.value === user.userSex) || null
      : null,
  );

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username: userName,
      phoneNumber,
      email,
      healthInsurance: healthInsurance?.value || "",
      comorbities: comorbities?.value || "",
      birthDate: birthDate?.format("YYYY-MM-DD") || "",
      bloodType: bloodType?.value || "",
      userSex: userSex?.value || "",
      password: user?.password || "", // Ensure password is always a string
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Perfil atualizado com sucesso!");
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
            onChange={(event: unknown, newValue: OptionType | null) =>
              setUserSex(newValue)
            }
            renderOption={(
              props: React.HTMLAttributes<HTMLLIElement>,
              option: OptionType,
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
            onChange={(date) => setBirthDate(date)}
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
            onChange={(event: unknown, newValue: OptionType | null) =>
              setHealthInsurance(newValue)
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
            onChange={(event: unknown, newValue: OptionType | null) =>
              setBloodType(newValue)
            }
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tipo sanguíneo"
              />
            )}
          />
        </RowContainer>
        <RowContainer>
          <Autocomplete
            id="size-medium-filled"
            options={comorbitiesOptions}
            size="medium"
            value={comorbities}
            onChange={(event: unknown, newValue: OptionType | null) =>
              setComorbities(newValue)
            }
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
          onClick={handleSave}
        >
          <StyledButtonText>Salvar</StyledButtonText>
        </Button>
      </MainContainer>
      <BottomNav />
    </>
  );
};

export default EditProfile;
