import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { MainContainer } from "./styles";

interface MenuOptionsProps {
  menuName: string;
  menuIcon: string;
}
const MenuOptions: FC<MenuOptionsProps> = ({ menuName, menuIcon }) => {
  const navigate = useNavigate();

  return (
    <MainContainer onClick={() => navigate(`/${menuName}`)}>
      <img src={menuIcon} alt={`${menuIcon}`} />
      <Typography fontWeight="medium">{menuName}</Typography>
    </MainContainer>
  );
};

export default MenuOptions;
