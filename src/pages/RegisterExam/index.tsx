// @ts-nocheck
import React, { useCallback, useEffect } from "react";
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
import { toast } from "react-toastify";
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
import { useContent } from "@/stores/ContentStore";
import { useUser } from "@/stores/UserStore";

type SpecificOptionKeys = keyof typeof specificOptions;

function RegisterExam() {
  const {
    contents,
    setContents,
    contentType,
    setContentType,
    contentDate,
    setContentDate,
    contentSubtype,
    setContentSubtype,
    contentOptions,
    setContentOptions,
    contentOtherText,
    setContentOtherText,
    contentRecurrence,
    setContentRecurrence,
    contentFile,
    setContentFile,
  } = useContent();

  const { user } = useUser();

  useEffect(() => {
    setContentType("");
    setContentDate(null as unknown as Dayjs);
    setContentSubtype("");
    setContentOptions([]);
    setContentOtherText("");
    setContentRecurrence("");
    setContentFile("");
  }, [
    setContentType,
    setContentDate,
    setContentSubtype,
    setContentOptions,
    setContentOtherText,
    setContentRecurrence,
    setContentFile,
  ]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setContentFile(reader.result as string);
      };
      setContentFile(file.name); // Set file name to display
    },
    [setContentFile],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleActionChange = (
    event: unknown,
    newValue: { label: string; value: string } | null,
  ) => {
    setContentType(newValue?.value || "");
    setContentSubtype("");
    setContentOptions([]);
    setContentOtherText("");
  };

  const handleCheckboxChange = (option: string) => {
    setContentOptions((prevSelected: string[]) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option],
    );
  };

  const renderSpecificOptions = () => {
    // eslint-disable-next-line
    if (contentSubtype && specificOptions.hasOwnProperty(contentSubtype)) {
      return specificOptions[contentSubtype as SpecificOptionKeys].map(
        (option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={contentOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            }
            label={option}
          />
        ),
      );
    }
    return null;
  };

  const handleSave = async () => {
    const newContents = contentOptions.map((option) => ({
      userIdentifier: user.email,
      contentType,
      contentDate: contentDate ? contentDate.format("YYYY-MM-DD") : "",
      contentSubtype,
      contentOption: option,
      contentOtherText: option === "Outros" ? contentOtherText : "",
      contentRecurrence,
      contentFile,
    }));

    // Ensure that we save a single record for consultations as they do not have multiple options
    if (contentType === "consulta" && newContents.length === 0) {
      newContents.push({
        userIdentifier: user.email,
        contentType,
        contentDate: contentDate ? contentDate.format("YYYY-MM-DD") : "",
        contentSubtype,
        contentOption: contentSubtype,
        contentOtherText,
        contentRecurrence,
        contentFile,
      });
    }

    try {
      // eslint-disable-next-line
      const resolveAfter3Sec = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          const updatedContents = [...contents, ...newContents];
          setContents(updatedContents);
          localStorage.setItem("contents", JSON.stringify(updatedContents));
          resolve();
        }, 3000);
      });

      toast.promise(resolveAfter3Sec, {
        pending: "Salvando...",
        success: "Conteúdos salvos com sucesso 👌",
        error: "Erro ao salvar conteúdos 🤯",
      });

      await resolveAfter3Sec;
      console.log("Conteúdos salvos com sucesso", newContents);
    } catch (error) {
      toast.error("Erro ao salvar conteúdos");
    }
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
            value={actionType.find((type) => type.value === contentType)}
            onChange={handleActionChange}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Selecionar" />
            )}
          />
        </LabeledContainerInput>
        {contentType === "exame" && (
          <LabeledContainerInput label="Tipo de Exame">
            <Autocomplete
              id="subaction-autocomplete"
              options={examTypes}
              size="medium"
              value={examTypes.find((type) => type.value === contentSubtype)}
              onChange={(event, newValue) =>
                setContentSubtype((newValue?.value as SpecificOptionKeys) || "")
              }
              fullWidth
              renderInput={(params) => (
                <TextField {...params} variant="filled" label="Selecionar" />
              )}
            />
          </LabeledContainerInput>
        )}
        {contentType === "consulta" && (
          <LabeledContainerInput label="Especialidade">
            <Autocomplete
              id="subaction-autocomplete"
              options={consultationTypes}
              size="medium"
              value={consultationTypes.find(
                (type) => type.value === contentSubtype,
              )}
              onChange={(event, newValue) =>
                setContentSubtype((newValue?.value as SpecificOptionKeys) || "")
              }
              fullWidth
              renderInput={(params) => (
                <TextField {...params} variant="filled" label="Selecionar" />
              )}
            />
          </LabeledContainerInput>
        )}
        {contentSubtype && (
          <SpecificOptionsContainer>
            {renderSpecificOptions()}
          </SpecificOptionsContainer>
        )}
        {contentOptions.includes("Outros") && (
          <TextField
            variant="filled"
            label="Especificar"
            fullWidth
            value={contentOtherText}
            onChange={(e) => setContentOtherText(e.target.value)}
            inputProps={{ maxLength: 50 }}
          />
        )}
        <LabeledContainerInput label="Data">
          <DatePicker
            key="birthDate"
            value={contentDate}
            label="DD/MM/AAAA"
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
            format="DD/MM/YYYY"
            sx={{ width: "100%" }}
            slotProps={{ textField: { variant: "filled" } }}
            disableFuture
            onChange={(date) => setContentDate(date as Dayjs)}
          />
        </LabeledContainerInput>
        <LabeledContainerInput label="Recorrência">
          <Autocomplete
            id="recurrence-autocomplete"
            options={recurrenceOptions}
            size="medium"
            value={recurrenceOptions.find(
              (type) => type.value === contentRecurrence,
            )}
            onChange={(event, newValue) =>
              setContentRecurrence(newValue?.value || "")
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
            <hr
              style={{
                borderLeft: "2px dashed #253b6e",
                height: "48px",
                margin: "0 16px",
              }}
            />
            <AttachOption>
              <AttachIcon src={PhotoIcon} alt="Foto" />
              <Typography color="#253B6E" fontWeight="500">
                Foto
              </Typography>
            </AttachOption>
          </AttachSection>
          {contentFile && (
            <div>
              <Typography variant="subtitle1" fontWeight="600">
                Arquivos:
              </Typography>
              <ul>
                <li>{contentFile}</li>
              </ul>
            </div>
          )}
        </LabeledContainerInput>
        <Button
          fullWidth
          sx={{ margin: "1rem 1rem", textTransform: "none", maxWidth: "500px" }}
          variant="contained"
          onClick={handleSave}
        >
          <Typography
            fontSize="1.3rem"
            fontWeight="800"
            sx={{ padding: " 1rem 4rem;" }}
          >
            Salvar
          </Typography>
        </Button>
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default RegisterExam;
