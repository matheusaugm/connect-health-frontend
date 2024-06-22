import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  AvatarContainer,
  MainContainer,
  UserInfoContainer,
} from "@/pages/Settings/styles";
import NotificationsHeader from "@/components/NotificationsHeader";
import BottomNav from "@/components/BottomNav";
import SettingsOptions from "@/components/SettingsOptions";
import { useUser } from "@/stores/UserStore";

function Settings() {
  const { user, setIsAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
            {user?.username?.charAt(0)}
          </Avatar>
          <UserInfoContainer>
            <Typography fontSize="1rem" fontWeight="600">
              {user?.username}
            </Typography>
            <Typography color="grey" fontSize="0.7rem" fontWeight="400">
              {user?.email}
            </Typography>
          </UserInfoContainer>
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
            sx={{ padding: "1rem 4rem" }}
          >
            Editar perfil
          </Typography>
        </Button>
        <SettingsOptions onLogout={handleLogout} />
      </MainContainer>
      <BottomNav />
    </>
  );
}

export default Settings;
