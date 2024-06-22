import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Typography } from "@mui/material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "@/components/SettingsOptions/styles";

interface SettingsOptionsProps {
  onLogout: () => void;
}

const SettingsOptions = ({ onLogout }: SettingsOptionsProps) => {
  const navigate = useNavigate();
  const settingsOptions = [
    {
      optionLabel: "Notificações",
      optionIcon: <NotificationsIcon sx={{ color: "white" }} />,
    },
    {
      optionLabel: "Termos e condições",
      optionIcon: <FeedOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      optionLabel: "Informar um problema",
      optionIcon: <ErrorOutlineOutlinedIcon sx={{ color: "white" }} />,
      pathName: "/report_an_issue",
    },
    {
      optionLabel: "Log out",
      optionIcon: <ExitToAppOutlinedIcon sx={{ color: "white" }} />,
      action: onLogout,
    },
    {
      optionLabel: "Alterar senha",
      optionIcon: <PasswordOutlinedIcon sx={{ color: "white" }} />,
      pathName: "/change_password",
    },
  ];

  const handleClick = (option: any) => {
    if (option.action) {
      option.action();
    } else if (option.pathName) {
      navigate(option.pathName);
    }
  };

  return (
    <>
      {settingsOptions.map((option) => (
        <MainContainer
          onClick={() => handleClick(option)}
          key={`mainContainer${option.optionLabel}`}
        >
          <Button
            size="small"
            sx={{ maxWidth: "30px" }}
            color="primary"
            variant="contained"
          >
            {option.optionIcon}
          </Button>
          <Typography fontSize="1rem" fontWeight="600">
            {option.optionLabel}
          </Typography>
          <ChevronRightIcon sx={{ justifySelf: "flex-end" }} />
        </MainContainer>
      ))}
    </>
  );
};

export default SettingsOptions;
