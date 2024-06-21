import React, { useState, MouseEvent, ChangeEvent } from "react";
import FormControl, { FormControlOwnProps } from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { OutlinedInput } from "@mui/material";

interface CustomInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  variant?: FormControlOwnProps["variant"];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  variant = "filled",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  const isPassword = type === "password";

  return (
    <FormControl sx={{ width: "100%" }} variant={variant}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {variant === "filled" ? (
        <FilledInput
          id={id}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          endAdornment={
            isPassword && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
          {...props}
        />
      ) : (
        <OutlinedInput
          id={id}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          endAdornment={
            isPassword && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
          {...props}
        />
      )}
    </FormControl>
  );
};

export default CustomInput;
