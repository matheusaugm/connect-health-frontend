export const actionType = [
  { label: "Exame", value: "exame" },
  { label: "Consulta", value: "consulta" },
];

export const examTypes = [
  { label: "Sanguíneos", value: "sanguineos" },
  { label: "Imagens", value: "imagens" },
  { label: "Diversos", value: "diversos" },
];

export const consultationTypes = [
  { label: "Clínica Geral", value: "clinica_geral" },
  { label: "Pediatria", value: "pediatria" },
  { label: "Ginecologia", value: "ginecologia" },
  { label: "Cardiologia", value: "cardiologia" },
  { label: "Ortopedia", value: "ortopedia" },
  { label: "Oftalmologia", value: "oftalmologia" },
  { label: "Dermatologia", value: "dermatologia" },
  { label: "Psiquiatria", value: "psiquiatria" },
  { label: "Nutrição", value: "nutricao" },
  { label: "Fisioterapia", value: "fisioterapia" },
  { label: "Odontologia", value: "odontologia" },
  { label: "Outros", value: "outros" },
];

export const recurrenceOptions = [
  { label: "Diário", value: "diario" },
  { label: "Semanal", value: "semanal" },
  { label: "Quinzenal", value: "quinzenal" },
  { label: "Mensal", value: "mensal" },
  { label: "Bimestral", value: "bimestral" },
  { label: "Trimestral", value: "trimestral" },
  { label: "Semestral", value: "semestral" },
  { label: "Anual", value: "anual" },
];

export const specificOptions = {
  sanguineos: [
    "Hemograma Completo",
    "Glicemia de Jejum",
    "Hemoglobina Glicada",
    "Perfil Lipídico",
    "Creatinina",
    "Ureia",
    "Função Hepática",
    "TSH",
    "T4 Livre",
    "Vitamina D",
    "Hemograma Anemia",
    "PSA",
    "HIV",
    "Sorologia para Hepatites",
    "PCR",
    "Outros",
  ],
  imagens: [
    "Radiografia",
    "Ultrassonografia",
    "Tomografia Computadorizada",
    "Ressonância Magnética",
    "Mamografia",
    "Densitometria Óssea",
    "Ecocardiograma",
    "Angiotomografia",
    "Cintilografia",
    "PET-CT",
    "Outros",
  ],
};
