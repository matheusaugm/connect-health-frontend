import React, { useState, useCallback } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Dayjs } from "dayjs";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NotificationsHeader from "@/components/NotificationsHeader";
import {
  MainContainer,
  SpecificOptionsContainer,
  AttachSection,
  AttachOption,
  AttachIcon,
} from "@/pages/RegisterExam/styles";
import BottomNav from "@/components/BottomNav";
import LabeledContainerInput from "@/components/LabeledContainerInput";
import UploadIcon from "@/assets/upload_icon.svg";
import PhotoIcon from "@/assets/photo_icon.svg";
import {
  actionType,
  examTypes,
  consultationTypes,
  specificOptions,
  recurrenceOptions,
} from "@/utils/registerExamOptions";

function RegisterExam() {
  const [action, setAction] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [subAction, setSubAction] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [actionDate, setActionDate] = useState<Dayjs | null>(null);
  const [otherText, setOtherText] = useState<string>("");
  const [recurrence, setRecurrence] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleActionChange = (
    event: unknown,
    newValue: { label: string; value: string } | null,
  ) => {
    setAction(newValue);
    setSubAction(null);
    setSelectedOptions([]);
    setOtherText("");
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option],
    );
  };

  const renderSpecificOptions = () => {
    if (subAction && specificOptions[subAction]) {
      return specificOptions[subAction].map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          }
          label={option}
        />
      ));
    }
    return null;
  };

  return (
    <>
      <NotificationsHeader />
      <MainContainer>
        <LabeledContainerInput label="Tipo de registro">
          <Autocomplete
            id="size-medium-filled"
            options={actionType}
            size="medium"
            value={action}
            onChange={handleActionChange}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Selecionar" />
            )}
          />
        </LabeledContainerInput>
        {action?.value === "exame" && (
          <LabeledContainerInput label="Tipo de Exame">
            <Autocomplete
              id="subaction-autocomplete"
              options={examTypes}
              size="medium"
              value={examTypes.find((type) => type.value === subAction)}
              onChange={(event, newValue) =>
                setSubAction(newValue?.value || null)
              }
              fullWidth
              renderInput={(params) => (
                <TextField {...params} variant="filled" label="Selecionar" />
              )}
            />
          </LabeledContainerInput>
        )}
        {action?.value === "consulta" && (
          <LabeledContainerInput label="Especialidade">
            <Autocomplete
              id="subaction-autocomplete"
              options={consultationTypes}
              size="medium"
              value={consultationTypes.find((type) => type.value === subAction)}
              onChange={(event, newValue) =>
                setSubAction(newValue?.value || null)
              }
              fullWidth
              renderInput={(params) => (
                <TextField {...params} variant="filled" label="Selecionar" />
              )}
            />
          </LabeledContainerInput>
        )}
        {subAction && (
          <SpecificOptionsContainer>
            {renderSpecificOptions()}
          </SpecificOptionsContainer>
        )}
        {selectedOptions.includes("Outros") && (
          <TextField
            variant="filled"
            label="Especificar"
            fullWidth
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            inputProps={{ maxLength: 50 }}
          />
        )}
        <LabeledContainerInput label="Data">
          <DatePicker
            key="birthDate"
            value={actionDate}
            label="DD/MM/AAAA"
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
            format="DD/MM/YYYY"
            sx={{ width: "100%" }}
            slotProps={{ textField: { variant: "filled" } }}
            disableFuture
            onChange={(date) => setActionDate(date as Dayjs)}
          />
        </LabeledContainerInput>
        <LabeledContainerInput label="Recorrência">
          <Autocomplete
            id="recurrence-autocomplete"
            options={recurrenceOptions}
            size="medium"
            value={recurrenceOptions.find((type) => type.value === recurrence)}
            onChange={(event, newValue) =>
              setRecurrence(newValue?.value || null)
            }
            fullWidth
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Selecionar" />
            )}
          />
        </LabeledContainerInput>
        <LabeledContainerInput label="Anexar">
          <AttachSection {...getRootProps()}>
            <input {...getInputProps()} />
            <AttachOption>
              <AttachIcon src={UploadIcon} alt="Upload arquivo" />
              <Typography color="#253B6E" fontWeight="500">
                Upload arquivo
              </Typography>
            </AttachOption>
            <hr style={{ borderLeft: "2px dashed #253b6e" }} />
            <AttachOption>
              <AttachIcon src={PhotoIcon} alt="Foto" />
              <Typography color="#253B6E" fontWeight="500">
                Foto
              </Typography>
            </AttachOption>
          </AttachSection>
          {files.length > 0 && (
            <div>
              <Typography variant="subtitle1" fontWeight="600">
                Arquivos:
              </Typography>
              <ul>
                {files.map((file) => (
                  <li key={file.path}>{file.path}</li>
                ))}
              </ul>
            </div>
          )}
        </LabeledContainerInput>
        <Button
          fullWidth
          sx={{ margin: "1rem 1rem", textTransform: "none", maxWidth: "500px" }}
          variant="contained"
          onClick={() => console.log("Salvar")}
        >
          <Typography
            fontSize="1.3rem"
            fontWeight="800"
            sx={{ padding: " 1rem 4rem;" }}
          >
            Salvar{" "}
          </Typography>
        </Button>
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default RegisterExam;
