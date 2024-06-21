import { FC, ReactNode } from "react";
import { Typography } from "@mui/material";
import { LabelFormContainer } from "@/components/LabeledContainerInput/styles";

interface LabeledContainerInputProps {
  label: string;
  children: ReactNode;
}

const LabeledContainerInput: FC<LabeledContainerInputProps> = ({
  label,
  children,
  ...props
}: LabeledContainerInputProps) => {
  return (
    <LabelFormContainer {...props}>
      <Typography fontWeight="600" color="primary">
        {label}
      </Typography>
      {children}
    </LabelFormContainer>
  );
};

export default LabeledContainerInput;
