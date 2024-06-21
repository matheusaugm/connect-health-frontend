import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  AvatarContainer,
  MainContainer,
  UserInfoCcntainer,
} from "@/pages/Settings/styles";
import NotificationsHeader from "@/components/NotificationsHeader";
import BottomNav from "@/components/BottomNav";
import SettingsOptions from "@/components/SettingsOptions";

function Settings() {
  const [user, setUser] = useState<any>(null);
  const [usermail, setUsermail] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    // fetchData();
    setUser("Matheus");
    setUsermail("matheusmeka01@gmail.com");
  }, []);

  return (
    <>
      <NotificationsHeader pageName="Perfil" />
      <MainContainer>
        <AvatarContainer>
          <Avatar
            sx={{ bgcolor: "#C62727" }}
            alt="Avatar Icon"
            src="/broken-image.jpg"
          >
            {user?.charAt(0)}
          </Avatar>
          <UserInfoCcntainer>
            <Typography fontSize="1rem" fontWeight="600">
              {user && user}
            </Typography>
            <Typography color="grey" fontSize="0.7rem" fontWeight="400">
              {usermail && usermail}
            </Typography>
          </UserInfoCcntainer>
        </AvatarContainer>
        <Button
          fullWidth
          sx={{ margin: "1rem 1rem", textTransform: "none", maxWidth: "500px" }}
          variant="contained"
          onClick={() => navigate("/edit_profile")}
        >
          <Typography
            fontSize="1.3rem"
            fontWeight="800"
            sx={{ padding: " 1rem 4rem;" }}
          >
            Editar perfil
          </Typography>
        </Button>

        <SettingsOptions />
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default Settings;
