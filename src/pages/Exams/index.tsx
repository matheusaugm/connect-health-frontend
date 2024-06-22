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

interface Exam {
  userIdentifier: string;
  contentType: string;
  contentDate: string;
  contentSubtype: string;
  contentOption: string;
  contentOtherText: string;
  contentRecurrence: string;
  contentFile: string;
}

const Exams = () => {
  const [examType, setExamType] = useState<string>("");
  const [examDate, setExamDate] = useState<Dayjs | null>(null);
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const storedExams = localStorage.getItem("contents");
    if (storedExams) {
      setExams(
        JSON.parse(storedExams).filter(
          (content: Exam) => content.contentType === "exame",
        ),
      );
    }
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setExamType(event.target.value);
  };

  const filteredExams = exams.filter((exam) => {
    const matchesType = examType ? exam.contentSubtype === examType : true;
    const matchesDate = examDate
      ? exam.contentDate === examDate.format("YYYY-MM-DD")
      : true;
    return matchesType && matchesDate;
  });

  return (
    <>
      <NotificationsHeader pageName="Exames" />
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
            <InputLabel id="demo-simple-select-filled-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={examType}
              onChange={handleChange}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="sanguineos">Sanguíneos</MenuItem>
              <MenuItem value="imagens">Imagens</MenuItem>
              <MenuItem value="diversos">Diversos</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            key="examDate"
            value={examDate}
            sx={{ minWidth: "120px" }}
            label="Data"
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
            format="DD/MM/YYYY"
            slotProps={{ textField: { variant: "filled", size: "small" } }}
            disableFuture
            onChange={(date) => setExamDate(date as Dayjs)}
          />
        </FilterContainer>
        <ContentContainer>
          {filteredExams.map((exam, index) => (
            <ContentCard
              key={index}
              examType={exam.contentSubtype}
              examDetails={exam.contentOption}
              examDate={exam.contentDate}
              examName={exam.contentOption}
              examFile={exam.contentFile}
            />
          ))}
        </ContentContainer>
      </MainContainer>
      <BottomNav />
    </>
  );
};

export default Exams;
