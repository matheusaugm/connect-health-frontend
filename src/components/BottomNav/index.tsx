import { FC } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import { MainContainer } from "@/components/BottomNav/styles";

const BottomNav: FC = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => navigate("/home")}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/registerItem")}
          label="Registrar"
          icon={<AddIcon />}
        />
        <BottomNavigationAction
          onClick={() => console.log("wip")}
          label="Calendário"
          icon={<EventIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate("/settings")}
          label="Perfil"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </MainContainer>
  );
};
export default BottomNav;
