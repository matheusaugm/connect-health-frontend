import { FC, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  ExamDateContainer,
  ExamDescriptionContainer,
  ExamInfoContainer,
  IconContainer,
  MainContainer,
} from "@/components/ContentCard/style";
import bloodExam from "@/assets/blood_exam_icon.svg";
import imageExam from "@/assets/image_exam_icon.svg";
import otherExam from "@/assets/medical_sharp_icon.svg";
import appointmentIcon from "@/assets/clock_icon.svg";

interface ContentCardProps {
  examType: string;
  examDetails: string;
  examDate: string;
  examName: string;
  examFile?: string;
}

const ContentCard: FC<ContentCardProps> = ({
  examType,
  examDetails,
  examDate,
  examName,
  examFile,
}) => {
  const [examIcon, setExamIcon] = useState<string>("");

  useEffect(() => {
    if (examType === "sanguineos") {
      setExamIcon(bloodExam);
    } else if (examType === "imagens") {
      setExamIcon(imageExam);
    } else if (examType === "consulta" || examType === "consultas") {
      setExamIcon(appointmentIcon);
    } else {
      setExamIcon(otherExam);
    }
  }, [examType]);

  const handleFileOpen = () => {
    if (examFile) {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(
          `<iframe src="${examFile}" width="100%" height="100%" style="border:none;"></iframe>`,
        );
        newWindow.document.close();
      }
    }
  };

  return (
    <MainContainer onClick={handleFileOpen}>
      <IconContainer>
        <img src={examIcon} alt="Exam Icon" />
      </IconContainer>
      <ExamInfoContainer>
        <ExamDescriptionContainer>
          <Typography fontSize="1.2rem" fontWeight="500">
            {examName}
          </Typography>
          <Typography fontSize="1rem" fontWeight="400">
            {examDetails}
          </Typography>
        </ExamDescriptionContainer>
        <ExamDateContainer>
          <Typography fontSize="0.8rem" fontWeight="500">
            {examDate}
          </Typography>
        </ExamDateContainer>
      </ExamInfoContainer>
    </MainContainer>
  );
};

export default ContentCard;
