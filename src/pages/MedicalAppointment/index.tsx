import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Dayjs } from "dayjs";
import BottomNav from "@/components/BottomNav";
import {
  ContentContainer,
  FilterContainer,
  MainContainer,
} from "@/pages/Exams/style";
import NotificationsHeader from "@/components/NotificationsHeader";
import ContentCard from "@/components/ContentCard";
import { consultationTypes } from "@/utils/registerExamOptions";

interface Consultation {
  userIdentifier: string;
  contentType: string;
  contentDate: string;
  contentSubtype: string;
  contentOption: string;
  contentOtherText: string;
  contentRecurrence: string;
  contentFile: string;
}

const MedicalAppointments = () => {
  const [speciality, setSpeciality] = useState<string>("");
  const [consultationDate, setConsultationDate] = useState<Dayjs | null>(null);
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  useEffect(() => {
    const storedContents = localStorage.getItem("contents");
    if (storedContents) {
      setConsultations(
        JSON.parse(storedContents).filter(
          (content: Consultation) => content.contentType === "consulta",
        ),
      );
    }
  }, []);

  const handleSpecialityChange = (event: SelectChangeEvent) => {
    setSpeciality(event.target.value);
  };

  const filteredConsultations = consultations.filter((consultation) => {
    const matchesSpeciality = speciality
      ? consultation.contentSubtype === speciality
      : true;
    const matchesDate = consultationDate
      ? consultation.contentDate === consultationDate.format("YYYY-MM-DD")
      : true;
    return matchesSpeciality && matchesDate;
  });

  return (
    <>
      <NotificationsHeader pageName="Consultas" />
      <MainContainer>
        <FilterContainer>
          <Typography fontSize="1rem" fontWeight="600">
            Ordenar por:
          </Typography>
          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="demo-simple-select-filled-label">
              Especialidade
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={speciality}
              onChange={handleSpecialityChange}
            >
              <MenuItem value="">Todas</MenuItem>
              {consultationTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DatePicker
            key="consultationDate"
            value={consultationDate}
            sx={{ minWidth: "120px" }}
            label="Data"
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
            format="DD/MM/YYYY"
            slotProps={{ textField: { variant: "filled", size: "small" } }}
            disableFuture
            onChange={(date) => setConsultationDate(date as Dayjs)}
          />
        </FilterContainer>
        <ContentContainer>
          {filteredConsultations.map((consultation, index) => (
            <ContentCard
              key={index}
              examType={consultation.contentSubtype}
              examDetails={consultation.contentOption}
              examDate={consultation.contentDate}
              examName={consultation.contentOption}
              examFile={consultation.contentFile}
            />
          ))}
        </ContentContainer>
      </MainContainer>
      <BottomNav />
    </>
  );
};

export default MedicalAppointments;
