import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { StyledMainContainer, StyledIcon } from "./styles";

interface MenuOptionsProps {
  menuName: string;
  menuIcon: string;
  route: string;
}
const MenuOptions: FC<MenuOptionsProps> = ({ menuName, menuIcon, route }) => {
  const navigate = useNavigate();
  const isDisabled = menuName !== "Consultas" && menuName !== "Exames";

  return (
    <StyledMainContainer
      onClick={() => !isDisabled && navigate(`/${route}`)}
      isDisabled={isDisabled}
    >
      <StyledIcon src={menuIcon} alt={`${menuIcon}`} isDisabled={isDisabled} />
      <Typography fontWeight="medium">{menuName}</Typography>
    </StyledMainContainer>
  );
};

export default MenuOptions;
