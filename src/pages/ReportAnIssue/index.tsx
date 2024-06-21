import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import NotificationsHeader from "@/components/NotificationsHeader";
import { MainContainer, RowContainer } from "@/pages/ReportAnIssue/styles";
import BottomNav from "@/components/BottomNav";
import { StyledButtonText } from "@/pages/EditProfile/styles";

const ReportAnIssue = () => {
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");

  return (
    <>
      <NotificationsHeader pageName="Informar um problema" />
      <MainContainer>
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
          <TextField
            id="filled-adornment-problem"
            value={problem}
            label="Detalhe o problema"
            fullWidth
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProblem(e.target.value)
            }
            variant="outlined"
            multiline
            rows={4} // Você pode ajustar o número de linhas conforme necessário
          />
        </RowContainer>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() =>
            toast.success(
              "Problema informado! Aguarde o contato da nossa equipe",
            )
          }
        >
          <StyledButtonText>Salvar</StyledButtonText>
        </Button>
      </MainContainer>
      <BottomNav />
    </>
  );
};

export default ReportAnIssue;
