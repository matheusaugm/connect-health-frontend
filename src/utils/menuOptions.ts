import MedicalHistoryIcon from "@/assets/medical_history_icon.svg";
import ExamsIcon from "@/assets/exams_icon.svg";
import MedicalAppointmentsIcon from "@/assets/appointments_icon.svg";
import Vaccines from "@/assets/vaccines_icon.svg";
import MedicalInfo from "@/assets/medical_info_icon.svg";
import MedicalImages from "@/assets/medical_images_icon.svg";
import MedicineControl from "@/assets/medicine_control_icon.svg";
import Prescription from "@/assets/prescription_icon.svg";

export const menuOptions = [
  {
    label: "Histórico médico",
    value: "MedicalHistory",
    icon: MedicalHistoryIcon,
  },
  { label: "Exames", value: "Exams", icon: ExamsIcon },
  {
    label: "Consultas",
    value: "MedicalAppointments",
    icon: MedicalAppointmentsIcon,
  },
  { label: "Vacinas", value: "Vaccines", icon: Vaccines },
  { label: "Informações médicas", value: "MedicalInfo", icon: MedicalInfo },
  { label: "Imagens médicas", value: "MedicalImages", icon: MedicalImages },
  {
    label: "Controle de medicamentos",
    value: "MedicineControl",
    icon: MedicineControl,
  },
  { label: "Receitas", value: "Prescription", icon: Prescription },
];
