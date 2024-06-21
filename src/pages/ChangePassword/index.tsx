import React, { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import NotificationsHeader from "@/components/NotificationsHeader";
import { MainContainer, RowContainer } from "@/pages/ChangePassword/styles";
import CustomInput from "@/components/StyledFormInput";
import { StyledButtonText } from "@/pages/EditProfile/styles";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <NotificationsHeader pageName="Alterar senha" />
      <MainContainer>
        <RowContainer>
          <CustomInput
            id="filled-adornment-password"
            label="Senha"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </RowContainer>
        <RowContainer>
          <CustomInput
            id="filled-adornment-confirm-password"
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        </RowContainer>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => toast.success("Senha alterada com sucesso!")}
        >
          {
            // TODO: Implementar o salvar
          }
          <StyledButtonText>Salvar</StyledButtonText>
        </Button>{" "}
      </MainContainer>
    </>
  );
};
export default ChangePassword;
